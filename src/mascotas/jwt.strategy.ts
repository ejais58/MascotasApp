import { Injectable, UnauthorizedException, HttpException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from './services/user.service';
import { MascotaService } from './services/mascotas.service';
import { JwtPayload } from '../../src/mascotas/entities/interfaces/jwtPayload';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService, private mascotaService: MascotaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtConstants.secret'
    });
  }

  async validate(payload: JwtPayload, id: number) {
   


    // if(!(payload.roll == 'admin')){
    //   throw new HttpException('forbidden', 403);
    // }
    
    // if (payload.id !== id){
    //     throw new HttpException('forbidden', 403);
    // }

    return { payload };
  }
}