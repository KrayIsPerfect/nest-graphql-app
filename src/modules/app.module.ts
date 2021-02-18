import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {CitiesModule} from "./cities/cities.module";
import {StationsModule} from "./stations/stations.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
        installSubscriptionHandlers: true,
        autoSchemaFile: 'schema.gql',
        playground: true
    }),
    CitiesModule,
    StationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
