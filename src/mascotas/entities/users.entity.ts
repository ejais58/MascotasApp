import { Entity, PrimaryColumn, Column } from 'typeorm';


@Entity()
export class Usuarios {
    @PrimaryColumn()
    Id_Usuario: number

    @Column({length: 20})
    Nombre_Usuario: string

    @Column({length: 20})
    Apellido_Usuario: string
}