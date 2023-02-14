import { Controller, Get, Param, UseGuards, ParseIntPipe, Req, HttpException, Query } from '@nestjs/common';
import { Mascotas } from '../entities/mascota.entity';
import { MascotaService } from '../services/mascotas.service';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { UserService } from '../services/user.service';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from '../entities/interfaces/jwtPayload'
import { PaginationDto } from '../dto/pagination.dto';





@Controller('mascotas')
export class MascotaController {
    constructor(private readonly mascotasService: MascotaService, private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('usuario/:id')
    async mascotasList(@Param('id', ParseIntPipe) id: number, @Req() req){
        //const payload1 = req.user;
        
        const decoded = jwt.verify(req.headers.authorization.split(' ')[1], 'jwtConstants.secret');
        const payload = decoded as JwtPayload;
        //return payload.id;
         
        if (payload.id !== id){
            throw new HttpException('Forbidden', 403);
        }
        return this.mascotasService.getMascotaByIdUser(id);
    }

    
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(@Query() pagination: PaginationDto ,@Req() req){

        const decoded = jwt.verify(req.headers.authorization.split(' ')[1], 'jwtConstants.secret');
        const payload = decoded as JwtPayload;
        //return payload.id;
         
        if (payload.roll !== 'admin'){
            throw new HttpException('Forbidden', 403);
        }
        return this.mascotasService.getMascotas(pagination);
    }
}