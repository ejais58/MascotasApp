import { InjectRepository } from '@nestjs/typeorm';
import { Mascotas } from '../../entities/mascota.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from '../../dto/pagination.dto';


export class MascotaDao{
    constructor(@InjectRepository(Mascotas) private mascotaRespository: Repository<Mascotas>){}
    
    async findMascotasByIdUser(id: number): Promise<Mascotas[]>{
        return this.mascotaRespository.find({where: {Id_Dueno: id}})
    }

    async findMascotasAdmin({page, limit}: PaginationDto){
        const offset = (page - 1) * limit;
        return this.mascotaRespository.find({skip: offset, take: limit});
    }
}