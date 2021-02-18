import {Controller, Get, Inject} from "@nestjs/common";
import {City} from "./city.entity";
import {CitiesService} from "./cities.service";

@Controller('api')
export class CitiesController {
    constructor(
        @Inject(CitiesService)
        private readonly citiesService: CitiesService,
        ) {}

    @Get('create')
    async create(): Promise<City> {
        return await this.citiesService.create({ name: 'Первый', phoneNumber: '123' } as City);
    }

    @Get('findAll')
    async findAll(): Promise<City[]> {
        return await this.citiesService.findAll();
    }
}