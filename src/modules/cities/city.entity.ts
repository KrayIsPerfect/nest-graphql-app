import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import {Station} from "../stations/station.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@Table
@ObjectType()
export class City extends Model<City> {
    @Column
    @Field()
    name: string;

    @Column
    @Field()
    phoneNumber: string;

    @HasMany(() => Station, 'cityId')
    @Field(() => [Station], { nullable: true })
    Stations: Station[];
}
