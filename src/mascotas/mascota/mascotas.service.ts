import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Mascotas } from './entities/mascota.entity';
import { PaginationDto } from '../user/dto/pagination.dto';
import { MascotaDao } from '../data/dao/mascotaDao';




@Injectable()
export class MascotaService {
    constructor(private mascotaDao: MascotaDao){}

    
    getMascotas(pagination: PaginationDto): Promise<Mascotas[]>{
        return this.mascotaDao.findMascotasAdmin(pagination)
    }

    getMascotaByIdUser(id: number): Promise<Mascotas[]>{
        return this.mascotaDao.findMascotasByIdUser(id);
    }

    

   
}