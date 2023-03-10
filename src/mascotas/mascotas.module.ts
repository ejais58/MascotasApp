import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascotas } from './entities/mascota.entity';
import { Usuarios } from './entities/users.entity';
import { MascotaController } from './controllers/mascota.controller';
import { MascotaService } from './services/mascotas.service';
import { UserService } from './services/user.service';
import { JwtModule } from '@nestjs/jwt/dist';
import { UsuarioController } from './controllers/usuario.controller';
import { JwtStrategy } from './jwt.strategy';
import { MascotaDao } from './data/dao/mascotaDao';
import { UserDao } from './data/dao/userDao';



@Module({
    imports: [TypeOrmModule.forFeature([Mascotas, Usuarios]),
    JwtModule.register({
        secret: 'jwtConstants.secret',
        signOptions: { expiresIn: '1h' },
    }),],
    controllers: [MascotaController, UsuarioController],
    providers: [MascotaService, UserService, JwtStrategy, MascotaDao, UserDao]
})
export class MascotasModule {}
