import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { citiesProviders } from './cities.providers';

@Module({
    providers: [CitiesService, ...citiesProviders],
    exports: [CitiesService],
})
export class CitiesModule {}