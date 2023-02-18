import { Module } from '@nestjs/common';
import { MascotaController } from './mascota.controller';
import { MascotaService } from './mascotas.service';
import { MascotaDao } from '../data/dao/mascotaDao';

@Module({
    controllers: [MascotaController],
    providers: [MascotaService, MascotaDao]
})
export class MascotaModule {}
