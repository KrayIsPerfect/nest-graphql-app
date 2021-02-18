import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import { stationsProviders } from './stations.providers';
import {DatabaseModule} from "../../db/database.module";
import {StationsResolver} from "./stations.resolver";

@Module({
    imports: [
        DatabaseModule,
    ],
    providers: [
        StationsResolver,
        StationsService,
        ...stationsProviders
    ],
    exports: [StationsService],
})
export class StationsModule {}