import { Test, TestingModule } from '@nestjs/testing';
import { BuyingDetailService } from './buying-detail.service';

describe('BuyingDetailService', () => {
  let service: BuyingDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyingDetailService],
    }).compile();

    service = module.get<BuyingDetailService>(BuyingDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
