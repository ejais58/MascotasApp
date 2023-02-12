import {  HttpException,Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Usuarios } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../dto/login-user.dto';


@Injectable()
export class UserService {
    constructor(@InjectRepository(Usuarios) private userRespository: Repository<Usuarios>, private jwtService: JwtService){}

    async createUser(user: CreateUserDto): Promise<Usuarios>{
        //Hash password
        user.Pass_Usuario = await argon2.hash(user.Pass_Usuario, {
            type: argon2.argon2d,
            memoryCost: 2 ** 16,
            hashLength: 50
        });
        
        //Create personal
        const newUser = this.userRespository.create(user);
        return this.userRespository.save(newUser);
    }

    async login(personal: LoginUserDto){
        
        const { Nombre_Usuario, Pass_Usuario} = personal;

        //Busco si existe en la base de datos el email ingresado en el cliente
        const findPersonal = await this.userRespository.findOne({where: {Nombre_Usuario: Nombre_Usuario}});
        if (!findPersonal){
            throw new HttpException('USER NOT FOUND', 404);
        }

        //Validar contraseñas (base de datos y la ingresada por el cliente)
        const validar = await argon2.verify(findPersonal.Pass_Usuario, Pass_Usuario)
        if (!validar){
            throw new HttpException('PASSWORD INVALID', 403);
        } 

        //generar jwt
        const payload = {id: findPersonal.Id_Usuario, nombre: findPersonal.Nombre_Usuario}
        const token = this.jwtService.sign(payload)
        const data = {token}
        return data;
    }
}