import { Module } from '@nestjs/common';
import { BuyingDetailService } from './buying-detail.service';
import { BuyingDetailController } from './buying-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyingDetail } from './entities/buying-detail.entity';

@Module({
  controllers: [BuyingDetailController],
  providers: [BuyingDetailService],
  imports:[TypeOrmModule.forFeature([BuyingDetail])]
})
export class BuyingDetailModule {}
