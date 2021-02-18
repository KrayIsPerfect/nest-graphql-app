import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { citiesProviders } from './cities.providers';
import {DatabaseModule} from "../../db/database.module";

@Module({
    imports: [
        DatabaseModule,
    ],
    providers: [CitiesService, ...citiesProviders],
    exports: [CitiesService],
})
export class CitiesModule {}