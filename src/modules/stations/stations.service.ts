import { Injectable } from '@nestjs/common';
import { Station } from './station.entity';
import {City} from "../cities/city.entity";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class StationsService {

    constructor(
        @InjectModel(Station)
        private stationModel: typeof Station,
    ) { }

    async create(Station: Station): Promise<Station> {
        const station = await this.stationModel.create<Station>(Station);

        return await this.findOneByName(station.name);
    }

    async findOneByName(name: string): Promise<Station> {
        return await this.stationModel.findOne<Station>({
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
        return await this.stationModel.findAll<Station>({
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