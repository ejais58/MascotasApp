import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id_Usuario: number

    @Column()
    Nombre_Usuario: string

    @Column()
    Apellido_Usuario: string

    @Column()
    Pass_Usuario: string

    @Column()
    Roll_Usuario: string
}