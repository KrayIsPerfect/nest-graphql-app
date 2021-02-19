import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { citiesProviders } from './cities.providers';
import {DatabaseModule} from "../../db/database.module";
import {CitiesResolver} from "./cities.resolver";
import {CitiesController} from "./cities.controller";
import {StationsModule} from "../stations/stations.module";

@Module({
    imports: [
        DatabaseModule,
        StationsModule,
    ],
    controllers: [
      CitiesController
    ],
    providers: [
        CitiesResolver,
        CitiesService,
        ...citiesProviders,
    ],
    exports: [CitiesService],
})
export class CitiesModule {}