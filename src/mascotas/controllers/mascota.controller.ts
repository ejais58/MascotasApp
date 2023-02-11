import { Controller, Get } from '@nestjs/common';

import { Mascotas } from '../entities/mascota.entity';
import { MascotaService } from '../services/mascotas.service';


@Controller('mascotas')
export class MascotaController {
    constructor(private readonly mascotasService: MascotaService) {}

    @Get()
    mascotasList(): Promise<Mascotas[]>{
        return this.mascotasService.getMascotas();
    }
}