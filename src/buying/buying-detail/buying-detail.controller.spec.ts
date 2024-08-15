import { Test, TestingModule } from '@nestjs/testing';
import { BuyingDetailController } from './buying-detail.controller';
import { BuyingDetailService } from './buying-detail.service';

describe('BuyingDetailController', () => {
  let controller: BuyingDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyingDetailController],
      providers: [BuyingDetailService],
    }).compile();

    controller = module.get<BuyingDetailController>(BuyingDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
