import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {CitiesModule} from "./cities/cities.module";
import {StationsModule} from "./stations/stations.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {City} from "./cities/city.entity";
import {Station} from "./stations/station.entity";

@Module({
  imports: [
    GraphQLModule.forRoot({
        installSubscriptionHandlers: true,
        autoSchemaFile: 'schema.gql',
        playground: true
    }),
    SequelizeModule.forRoot({
      host: 'localhost',
      database: 'home_db',
      username: 'postgres',
      password: 'qwer1234',
      dialect: 'postgres',
      port: 5432,
      models: [City, Station],
    }),
    CitiesModule,
    StationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
