import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import { stationsProviders } from './stations.providers';
import {DatabaseModule} from "../../db/database.module";

@Module({
    imports: [
        DatabaseModule,
    ],
    providers: [StationsService, ...stationsProviders],
    exports: [StationsService],
})
export class StationsModule {}