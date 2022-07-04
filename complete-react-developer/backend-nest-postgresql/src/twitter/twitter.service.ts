import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { Twitter } from './twitter.entity';

@Injectable()
export class TwitterService {
  constructor(
    @InjectRepository(Twitter)
    private twitterRepository: Repository<Twitter>,
  ) {}

  async addTwitter(twitter: Twitter): Promise<InsertResult> {
    return this.twitterRepository.insert(twitter);
  }

  async findAll(): Promise<Twitter[]> {
    return this.twitterRepository.find();
  }

  async findOne(id: string): Promise<Twitter> {
    return this.twitterRepository.findOne(id);
  }

  async update(id: string, twitter: Twitter): Promise<Twitter> {
    const twitterUpdate = await this.findOne(id);
    if (twitterUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.twitterRepository.update(id, twitter);
    return this.twitterRepository.findOne(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    const twitterUpdate = await this.findOne(id);
    if (twitterUpdate === undefined) {
      throw new NotFoundException();
    }
    return this.twitterRepository.delete(id);
  }
}
