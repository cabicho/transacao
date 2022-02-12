import { Injectable } from '@nestjs/common';

import {Interval} from '@nestjs/schedule';
import { TweetsService } from '../tweets.service';

@Injectable()
export class CheckNewTweetsTask {
    private limit = 10;
    constructor (private tweetService: TweetsService){
        
    }
    // criando um metodo
    // executado em cada 5 minutos
    @Interval(5000) 
    async handle(){
        console.log('Procurando tweets ...');
    }
}

// separando os registos por pagina 1, 2, 3, ...
                        // pag 1   pag 2
// select * from table limit 0, 15 15, 15