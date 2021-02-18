import { Module } from '@nestjs/common';
import {CitiesModule} from "./cities/cities.module";
import {StationsModule} from "./stations/stations.module";

@Module({
  imports: [
      CitiesModule,
      StationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
