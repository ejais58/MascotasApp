import { InjectRepository } from "@nestjs/typeorm";
import { Usuarios } from '../../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dto/create-user.dto';



export class UserDao{
    constructor(@InjectRepository(Usuarios) private userRespository: Repository<Usuarios>){}

    async registerUser(user: CreateUserDto){
        const newUser = this.userRespository.create(user);
        return this.userRespository.save(newUser);
    }

    async findUser(username: string){
        return this.userRespository.findOne({where: {Nombre_Usuario: username}});
    }
}