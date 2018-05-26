import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Property} from "./Property";

@Entity()
export class Unit {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    displayName: string

    @Column('double')
    basePrice: number

    @ManyToOne(type => Property, property => property.units)
    property: Property

}