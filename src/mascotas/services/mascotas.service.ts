import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Mascotas } from '../entities/mascota.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MascotaService {
    constructor(@InjectRepository(Mascotas) private mascotaRespository: Repository<Mascotas>){}

    getMascotas(): Promise<Mascotas[]>{
        return this.mascotaRespository.find();
    }
}