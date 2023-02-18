import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDao } from '../data/dao/userDao';
import { JwtModule } from '@nestjs/jwt/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { JwtStrategy } from './jwt.strategy';


@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: 'jwtConstants.secret',
        signOptions: { expiresIn: '1h' },
    }),],
    controllers: [UserController],
    providers: [UserService, UserDao]
})
export class UserModule {}
