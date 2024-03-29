import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports: [
      MongooseModule.forRoot(
          'mongodb://root:root@db/analytics?authSource=admin', //mongodb e' o protocolo// usuario:senha
        { 
          useNewUrlParser: true
        }
      ),
      TweetsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
