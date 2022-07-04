import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { TwitterService } from './twitter.service';
import { TwitterDto } from './dto/twitter.dto';
import { Twitter } from './twitter.entity';

@Controller('tweets')
export class TwitterController {
  constructor(private twitterService: TwitterService) {}

  @Post()
  create(@Body() twitter: Twitter) {
    return this.twitterService.addTwitter(twitter);
  }

  @Get()
  findAll(): Promise<TwitterDto[]> {
    return this.twitterService.findAll();
  }

  @Get(':id')
  getOneTwitter(@Param('id') id: string): Promise<Twitter> {
    return this.twitterService.findOne(id);
  }

  @Patch(':id')
  updateTwitter(
    @Param('id') id: string,

    @Body() twitter: Twitter,
  ): Promise<Twitter> {
    return this.twitterService.update(id, twitter);
  }

  @Delete(':id')
  deleteTwitter(@Param('id') id: string) {
    return this.twitterService.delete(id);
  }
}
