import { Injectable, Inject } from '@nestjs/common';
import { Station } from './station.entity';
import {STATION_REPOSITORY} from "../../config/const";

@Injectable()
export class StationsService {

    constructor(
        @Inject(STATION_REPOSITORY)
        private readonly StationRepository: typeof Station
    ) { }

    async create(Station: Station): Promise<Station> {
        return await this.StationRepository.create<Station>(Station);
    }

    async findOneByName(name: string): Promise<Station> {
        return await this.StationRepository.findOne<Station>({ where: { name } });
    }

    async findAll(): Promise<Station[]> {
        return await this.StationRepository.findAll<Station>();
    }
}