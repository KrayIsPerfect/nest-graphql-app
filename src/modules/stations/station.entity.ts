import {Table, Column, Model, BelongsTo} from 'sequelize-typescript';
import {City} from "../cities/city.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Table
export class Station extends Model<Station> {
    @Column
    @Field()
    name: string;

    @BelongsTo(() => City, 'cityId')
    @Field(() => City)
    City: City;
}