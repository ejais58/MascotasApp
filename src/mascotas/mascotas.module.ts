import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascotas } from './entities/mascota.entity';
import { Usuarios } from './entities/users.entity';
import { MascotaController } from './controllers/mascota.controller';
import { MascotaService } from './services/mascotas.service';



@Module({
    imports: [TypeOrmModule.forFeature([Mascotas, Usuarios])],
    controllers: [MascotaController],
    providers: [MascotaService]
})
export class MascotasModule {}
