import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Mascotas } from '../../entities/mascota.entity';
import { Usuarios } from '../../entities/users.entity';

export const config: TypeOrmModuleOptions = {
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '123456',
    database: 'NestDB',
    options: { encrypt: false },
    entities: [Mascotas, Usuarios]
};