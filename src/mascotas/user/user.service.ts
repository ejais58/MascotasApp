import {  HttpException,Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Usuarios } from './entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDao } from '../data/dao/userDao';


@Injectable()
export class UserService {
    constructor(private jwtService: JwtService, private userDao: UserDao){}

    async createUser(user: CreateUserDto): Promise<Usuarios>{
        //Hash password
        user.Pass_Usuario = await argon2.hash(user.Pass_Usuario, {
            type: argon2.argon2d,
            memoryCost: 2 ** 16,
            hashLength: 50
        });
        
        //Create personal
        return this.userDao.registerUser(user);
    }

    async login(user: LoginUserDto){
        
        const { Nombre_Usuario, Pass_Usuario} = user;

        /*Busco si existe en la base de datos el nombre ingresado en el cliente, 
        y hasheo la contraseña ingresada para comparar con la contraseña de la base de datos*/
        const findUser = await this.userDao.findUserAndValidatePassword(Nombre_Usuario,Pass_Usuario);

        //generar jwt
        const payload = {id: findUser.Id_Usuario, nombre: findUser.Nombre_Usuario, roll: findUser.Roll_Usuario}
        const token = this.jwtService.sign(payload)
        const data = {token}
        return data;
    }

    
}