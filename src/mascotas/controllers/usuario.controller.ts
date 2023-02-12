import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Usuarios } from '../entities/users.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';


@Controller('users')
export class UsuarioController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    postUsuario(@Body() newUser: CreateUserDto){
        return this.userService.createUser(newUser);
    }

    @Post('login')
    login(@Body() user: LoginUserDto){
        return this.userService.login(user);
    }
}