import { Test, TestingModule } from '@nestjs/testing';
import {getModelToken} from "@nestjs/sequelize";
import {StationsService} from "../stations/stations.service";
import {Station} from "./station.entity";

const testStation = { name: 'Test', City: { name: 'TestCity'} };

class StationRepositoryMock {
    public async findOne(): Promise<Station> {
        // @ts-ignore
        return { name: 'Test', City: { name: 'TestCity'} };
    }
}

describe('StationsService', () => {
    let stationsService: StationsService;

    beforeEach(async () => {
        const StationRepositoryProvider = {
            provide: getModelToken(Station),
            useClass: StationRepositoryMock,
        };
        const module: TestingModule = await Test.createTestingModule({
            providers: [StationsService, StationRepositoryProvider],
        }).compile();

        stationsService = module.get(StationsService);
    });

    it('StationsService - should be defined', () => {
        expect(stationsService).toBeDefined();
    });

    describe('findOneByName', () => {
        it('should get station', async () => {
            const city = await stationsService.findOneByName('Тестовый');
            expect(city).toEqual(testStation);
        });
    });
});