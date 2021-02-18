import { Injectable, Inject } from '@nestjs/common';
import { City } from './City.entity';
import {CITY_REPOSITORY} from "../../config/const";

@Injectable()
export class CitiesService {

    constructor(
        @Inject(CITY_REPOSITORY)
        private readonly CityRepository: typeof City
    ) { }

    async create(City: City): Promise<City> {
        return await this.CityRepository.create<City>(City);
    }

    async findOneByName(name: string): Promise<City> {
        return await this.CityRepository.findOne<City>({ where: { name } });
    }
}