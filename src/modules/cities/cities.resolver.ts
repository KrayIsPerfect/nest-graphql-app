import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {City} from "./city.entity";
import {CitiesService} from "./cities.service";
import {NewCityInputDto} from "./dto/new-city.input.dto";

@Resolver(of => City)
export class CitiesResolver {
    constructor(private readonly citiesService: CitiesService) {}

    @Query(returns => City)
    async city(@Args('name') name: string): Promise<City> {
        const city = await this.citiesService.findOneByName(name);
        if (!city) {
            throw new NotFoundException(name);
        }
        return city;
    }

    @Query(returns => [City])
    cities(): Promise<City[]> {
        return this.citiesService.findAll();
    }

    @Mutation(returns => City)
    async addCity(
        @Args('newCityInput') newCityInput: NewCityInputDto,
    ): Promise<City> {
        let city = {};
        city['name'] = newCityInput.name;
        city['phoneNumber'] = newCityInput.phoneNumber;

        return await this.citiesService.create(city as City);
    }
}