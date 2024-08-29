import { Module } from '@nestjs/common';
import { TransporteurService } from './transporteur.service';
import { TransporteurController } from './transporteur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transporteur } from './entities/transporteur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transporteur]) ],
  controllers: [TransporteurController],
  providers: [TransporteurService],
})
export class TransporteurModule {}


