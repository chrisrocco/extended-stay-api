import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Unit} from "./Unit";

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

    @Column('varchar')
    city: string

    @Column('varchar')
    state: string

    @Column("int")
    zip: number

    @Column('varchar')
    phone: string

    @ManyToOne(type => Unit, unit => unit.property)
    @JoinTable()
    units: Unit[]

}
