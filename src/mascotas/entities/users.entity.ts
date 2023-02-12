import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    Id_Usuario: number

    @Column()
    Nombre_Usuario: string

    @Column()
    Apellido_Usuario: string

    @Column()
    Pass_Usuario: string
}