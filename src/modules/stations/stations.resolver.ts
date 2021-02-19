import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {Station} from "./station.entity";
import {StationsService} from "./stations.service";
import {NewStationInputDto} from "./dto/new-station.input.dto";

@Resolver(of => Station)
export class StationsResolver {
    constructor(private readonly stationsService: StationsService) {}

    @Query(returns => Station)
    async station(@Args('name') name: string): Promise<Station> {
        const station = await this.stationsService.findOneByName(name);
        if (!station) {
            throw new NotFoundException(name);
        }
        return station;
    }

    @Query(returns => [Station])
    stations(): Promise<Station[]> {
        return this.stationsService.findAll();
    }

    @Mutation(returns => Station)
    async addStation(
        @Args('newStationInput') newStationInput: NewStationInputDto,
    ): Promise<Station> {
        let station = {};
        station['name'] = newStationInput.name;
        station['cityId'] = newStationInput.cityId;

        return await this.stationsService.create(station as Station);
    }

}