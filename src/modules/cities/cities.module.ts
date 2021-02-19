import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import {CitiesResolver} from "./cities.resolver";
import {CitiesController} from "./cities.controller";
import {StationsModule} from "../stations/stations.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {City} from "./city.entity";

@Module({
    imports: [
        SequelizeModule.forFeature([City]),
        StationsModule,
    ],
    controllers: [
      CitiesController
    ],
    providers: [
        CitiesResolver,
        CitiesService,
    ],
    exports: [CitiesService],
})
export class CitiesModule {}