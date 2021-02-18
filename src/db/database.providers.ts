import { Sequelize } from 'sequelize-typescript';
import {City} from "../modules/cities/city.entity";
import {Station} from "../modules/stations/station.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                host: 'localhost',
                database: 'home_db',
                username: 'postgres',
                password: 'qwer1234',
                dialect: 'postgres',
                port: 5432,
            });
            sequelize.addModels([City, Station]);
            await sequelize.sync({force: true});
            return sequelize;
        },
    },
];