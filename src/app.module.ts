import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasModule } from './mascotas/mascotas.module';
import { config } from './mascotas/data/dataAccess/database';

@Module({
  imports: [TypeOrmModule.forRoot(config),MascotasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
