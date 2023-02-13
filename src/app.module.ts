import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mascotas } from './mascotas/entities/mascota.entity';
import { MascotasModule } from './mascotas/mascotas.module';
import { Usuarios } from './mascotas/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '123456',
    database: 'NestDB',
    options: { encrypt: false },
    entities: [Mascotas, Usuarios]
  }),MascotasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
