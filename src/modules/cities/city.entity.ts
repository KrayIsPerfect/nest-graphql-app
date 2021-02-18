import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import {Station} from "../stations/station.entity";

@Table
export class City extends Model<City> {
    @Column
    name: string;

    @Column
    phoneNumber: string;

    @HasMany(() => Station, 'cityId')
    Stations: Station[];
}