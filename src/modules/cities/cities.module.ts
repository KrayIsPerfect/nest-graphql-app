import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { citiesProviders } from './cities.providers';
import {DatabaseModule} from "../../db/database.module";
import {CitiesResolver} from "./cities.resolver";
import {CitiesController} from "./cities.controller";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [
      CitiesController
    ],
    providers: [
        CitiesResolver,
        CitiesService,
        ...citiesProviders
    ],
    exports: [CitiesService],
})
export class CitiesModule {}