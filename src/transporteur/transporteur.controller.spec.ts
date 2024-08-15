import { Test, TestingModule } from '@nestjs/testing';
import { TransporteurController } from './transporteur.controller';
import { TransporteurService } from './transporteur.service';

describe('TransporteurController', () => {
  let controller: TransporteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransporteurController],
      providers: [TransporteurService],
    }).compile();

    controller = module.get<TransporteurController>(TransporteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
