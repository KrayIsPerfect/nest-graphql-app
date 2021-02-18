import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class City extends Model<City> {
    @Column
    name: string;

    @Column
    phoneNumber: string;
}