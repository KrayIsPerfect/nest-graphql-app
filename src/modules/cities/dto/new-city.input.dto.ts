import { Field, InputType } from '@nestjs/graphql';
import {NewStationInputDto} from "../../stations/dto/new-station.input.dto";

@InputType()
export class NewCityInputDto {
    @Field()
    name: string;

    @Field()
    phoneNumber: string;

    @Field(type => [NewStationInputDto], { nullable: true })
    Stations?: NewStationInputDto[];
}