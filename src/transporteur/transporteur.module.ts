import { Module } from '@nestjs/common';
import { TransporteurService } from './transporteur.service';
import { TransporteurController } from './transporteur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transporteur } from './entities/transporteur.entity';

@Module({
  controllers: [TransporteurController],
  providers: [TransporteurService],
  imports:[TypeOrmModule.forFeature([Transporteur])]
})
export class TransporteurModule {}
