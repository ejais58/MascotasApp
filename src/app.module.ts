import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './mascotas/data/dataAccess/database';
import { UserModule } from './mascotas/user/user.module';
import { MascotaModule } from './mascotas/mascota/mascota.module';


@Module({
  imports: [TypeOrmModule.forRoot(config), MascotaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
