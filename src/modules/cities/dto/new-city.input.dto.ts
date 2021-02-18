import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCityInputDto {
    @Field()
    name: string;

    @Field({nullable: true})
    phoneNumber: string;
}