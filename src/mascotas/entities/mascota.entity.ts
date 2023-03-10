import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Mascotas {
    @PrimaryColumn()
    Id_Mascota: number

    @Column()
    Nombre_Mascota: string

    @Column()
    Tipo_Mascota: string

    @Column()
    Id_Dueno: number
}