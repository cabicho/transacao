import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

import { InjectModel } from '@nestjs/mongoose';
import {Tweet} from './schemas/tweet.schema';
import {Model} from 'mongoose';
import {TweetDocument} from './schemas/tweet.schema';


@Injectable()
export class TweetsService {
  constructor(
      @InjectModel(Tweet.name)
      private tweetModel: Model<TweetDocument>,
  ){}

  create(createTweetDto: CreateTweetDto) {//recebe como retorno uma promessa
    return this.tweetModel.create(createTweetDto); //'This action adds a new tweet';
  }

  findAll({offset, limit}:{offset: number; limit: number}={offset:0, limit:50}) {
    return this.tweetModel.find().skip(offset).limit(limit).exec() //`This action returns all tweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
