import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import {StationsResolver} from "./stations.resolver";
import {SequelizeModule} from "@nestjs/sequelize";
import {Station} from "./station.entity";

@Module({
    imports: [
        SequelizeModule.forFeature([Station]),
    ],
    providers: [
        StationsResolver,
        StationsService,
    ],
    exports: [StationsService],
})
export class StationsModule {}