import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Mascotas } from '../entities/mascota.entity';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';




@Injectable()
export class MascotaService {
    constructor(@InjectRepository(Mascotas) private mascotaRespository: Repository<Mascotas>){}

    getMascotas(): Promise<Mascotas[]>{
        return this.mascotaRespository.find();
    }

    getMascotaByIdUser(id: number){
        return this.mascotaRespository.find({where: {Id_Dueno: id}})
        
    }

    

   
}