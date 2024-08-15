import { Module } from '@nestjs/common';
import { BuyingService } from './buying.service';
import { BuyingController } from './buying.controller';
import { BuyingDetailModule } from './buying-detail/buying-detail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buying } from './entities/buying.entity';
import { BuyingDetail } from './buying-detail/entities/buying-detail.entity';

@Module({
  controllers: [BuyingController],
  providers: [BuyingService],
  imports: [BuyingDetailModule,TypeOrmModule.forFeature([Buying,BuyingDetail])],
})
export class BuyingModule {}
