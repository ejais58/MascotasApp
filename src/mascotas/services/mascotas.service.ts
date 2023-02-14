import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Mascotas } from '../entities/mascota.entity';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { PaginationDto } from '../dto/pagination.dto';




@Injectable()
export class MascotaService {
    constructor(@InjectRepository(Mascotas) private mascotaRespository: Repository<Mascotas>){}

    
    getMascotas({page, limit}: PaginationDto): Promise<Mascotas[]>{
        const offset = (page - 1) * limit;
        return this.mascotaRespository.find({skip: offset, take: limit});
    }

    getMascotaByIdUser(id: number): Promise<Mascotas[]>{
        return this.mascotaRespository.find({where: {Id_Dueno: id}})
    }

    

   
}