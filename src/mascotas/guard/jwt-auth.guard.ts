import { Injectable, ExecutionContext, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    
}