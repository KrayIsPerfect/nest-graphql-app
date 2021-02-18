import {STATION_REPOSITORY} from "../../config/const";
import {Station} from "./station.entity";

export const stationsProviders = [{
    provide: STATION_REPOSITORY,
    useValue: Station,
}];