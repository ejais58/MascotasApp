import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDao } from '../data/dao/userDao';

@Module({
    controllers: [UserController],
    providers: [UserService, UserDao]
})
export class UserModule {}
