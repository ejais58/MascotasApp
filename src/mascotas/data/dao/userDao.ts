import { InjectRepository } from "@nestjs/typeorm";
import { Usuarios } from '../../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dto/create-user.dto';
import { HttpException } from '@nestjs/common';
import * as argon2 from 'argon2';



export class UserDao{
    constructor(@InjectRepository(Usuarios) private userRespository: Repository<Usuarios>){}

    async registerUser(user: CreateUserDto){
        const newUser = this.userRespository.create(user);
        return this.userRespository.save(newUser);
    }

    async findUserAndValidatePassword(username: string, password:string){
        //Busco si existe en la base de datos el nombre ingresado en el cliente
        const findUser = await this.userRespository.findOne({where: {Nombre_Usuario: username}});;
        if (!findUser){
            throw new HttpException('USER NOT FOUND', 404);
        }

        //Validar contraseñas (base de datos y la ingresada por el cliente)
        const validar = await argon2.verify(findUser.Pass_Usuario, password)
        if (!validar){
            throw new HttpException('PASSWORD INVALID', 403);
        } 

        return findUser;
    }
}