import { Module, CacheModule } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';

import {Tweet, TweetSchema} from './schemas/tweet.schema';
import {MongooseModule} from '@nestjs/mongoose';
import { CheckNewTweetsTask } from './check-new-tweets/check-new-tweets.task';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
      CacheModule.register({
        
      }),
      MongooseModule.forFeature([{
          name: Tweet.name, 
          schema: TweetSchema
      }]),
      ScheduleModule.forRoot(),
      TweetsModule,
  ],
  controllers: [TweetsController],
  providers: [TweetsService, CheckNewTweetsTask]
})
export class TweetsModule {}
