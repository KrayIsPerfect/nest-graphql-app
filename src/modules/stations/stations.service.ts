import { Injectable, Inject } from '@nestjs/common';
import { Station } from './station.entity';
import {STATION_REPOSITORY} from "../../config/const";
import {City} from "../cities/city.entity";

@Injectable()
export class StationsService {

    constructor(
        @Inject(STATION_REPOSITORY)
        private readonly StationRepository: typeof Station
    ) { }

    async create(Station: Station): Promise<Station> {
        const station = await this.StationRepository.create<Station>(Station);

        return await this.findOneByName(station.name);
    }

    async findOneByName(name: string): Promise<Station> {
        return await this.StationRepository.findOne<Station>({
            where: { name },
            include: [
                {
                    // @ts-ignore
                    model: City,
                    as: "City",
                    attributes: ["name", "phoneNumber"],
                },
            ],
        });
    }

    async findAll(): Promise<Station[]> {
        return await this.StationRepository.findAll<Station>({
            include: [
                {
                    // @ts-ignore
                    model: City,
                    as: "City",
                    attributes: ["name", "phoneNumber"],
                },
            ],
        });
    }
}