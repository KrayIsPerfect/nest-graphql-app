import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewStationInputDto {
    @Field()
    name: string;

    @Field({nullable: true})
    cityId?: number;
}