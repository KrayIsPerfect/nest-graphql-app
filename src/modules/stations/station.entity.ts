import {Table, Column, Model, BelongsTo,} from 'sequelize-typescript';
import {City} from "../cities/city.entity";

@Table
export class Station extends Model<Station> {
    @Column
    name: string;

    @BelongsTo(() => City, 'cityId')
    City: City;
}