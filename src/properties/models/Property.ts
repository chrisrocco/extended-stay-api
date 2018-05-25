import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    displayName: string

    @Column('double')
    lat: number

    @Column('double')
    lng: number

}