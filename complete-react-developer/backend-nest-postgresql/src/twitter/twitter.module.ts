import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterController } from './twitter.controller';
import { TwitterService } from './twitter.service';
import { Twitter } from './twitter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Twitter])],
  controllers: [TwitterController],
  providers: [TwitterService],
  exports: [TypeOrmModule],
})
export class TwitterModule {}
