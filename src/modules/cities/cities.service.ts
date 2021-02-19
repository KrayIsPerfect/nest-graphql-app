import { Injectable, Inject } from '@nestjs/common';
import { City } from './City.entity';
import {Station} from "../stations/station.entity";
import {StationsService} from "../stations/stations.service";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class CitiesService {

    constructor(
        @InjectModel(City)
        private cityModel: typeof City,
        @Inject(StationsService)
        private readonly stationsService: StationsService,
    ) { }

    async create(City: City): Promise<City> {
        const city = await this.cityModel.create<City>(City);

        for (const station of City.Stations) {
            station['cityId'] = city.id
            await this.stationsService.create(station as Station)
        }

        return await this.findOneByName(city.name);
    }

    async findOneByName(name: string): Promise<City> {
        return await this.cityModel.findOne<City>({
            where: { name },
            include: [
                {
                    // @ts-ignore
                    model: Station,
                    as: "Stations",
                    attributes: ["name"],
                },
            ],
        });
    }

    async findAll(): Promise<City[]> {
        return await this.cityModel.findAll<City>({
            include: [
                {
                    // @ts-ignore
                    model: Station,
                    as: "Stations",
                    attributes: ["id", "name"],
                },
            ],
        });
    }
}