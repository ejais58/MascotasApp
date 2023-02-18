import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';


@Controller('users')
export class UserController {
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