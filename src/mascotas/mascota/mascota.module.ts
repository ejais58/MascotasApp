import { Module } from '@nestjs/common';
import { MascotaController } from './mascota.controller';
import { MascotaService } from './mascotas.service';
import { MascotaDao } from '../data/dao/mascotaDao';
import { Mascotas } from './entities/mascota.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '../user/jwt.strategy';


@Module({
    imports: [TypeOrmModule.forFeature([Mascotas])],
    controllers: [MascotaController],
    providers: [MascotaService, MascotaDao, JwtStrategy]
})
export class MascotaModule {}
