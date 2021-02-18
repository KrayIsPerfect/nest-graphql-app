import { Field, InputType } from '@nestjs/graphql';
import {City} from "../../cities/city.entity";
import {NewCityInputDto} from "../../cities/dto/new-city.input.dto";

@InputType()
export class NewStationInputDto {
    @Field()
    name: string;

    @Field(() => NewCityInputDto)
    City: City;
}