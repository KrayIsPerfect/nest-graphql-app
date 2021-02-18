import {CITY_REPOSITORY} from "../../config/const";
import {City} from "./city.entity";

export const citiesProviders = [{
    provide: CITY_REPOSITORY,
    useValue: City,
}];