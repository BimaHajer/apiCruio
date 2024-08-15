import { Module } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { FournisseurController } from './fournisseur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fournisseur } from './entities/fournisseur.entity';
import { ContactModule } from 'src/contact/contact.module';

@Module({
  imports:[TypeOrmModule.forFeature([Fournisseur]),ContactModule],
  controllers: [FournisseurController],
  providers: [FournisseurService],
})
export class FournisseurModule {}
