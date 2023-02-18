import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Mascotas } from '../../mascota/entities/mascota.entity';
import { Usuarios } from '../../user/entities/users.entity';

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