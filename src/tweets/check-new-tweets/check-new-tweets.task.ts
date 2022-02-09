import { Injectable } from '@nestjs/common';

import {Interval} from '@nestjs/schedule';

@Injectable()
export class CheckNewTweetsTask {
    // criando um metodo
    // executado em cada 5 minutos
    @Interval(5000) 
    async handle(){
        console.log('Procurando tweets ...');
    }
}
