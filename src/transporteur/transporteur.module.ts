import { Module } from '@nestjs/common';
import { TransporteurService } from './transporteur.service';
import { TransporteurController } from './transporteur.controller';
import { Contact, Transporteur } from './entities/transporteur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [TransporteurController],
  providers: [TransporteurService],
  imports: [TypeOrmModule.forFeature([Transporteur, Contact])],
})
export class TransporteurModule {}
