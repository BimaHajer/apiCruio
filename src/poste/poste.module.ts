import { Module } from '@nestjs/common';
import { PosteService } from './poste.service';
import { PosteController } from './poste.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poste } from './entities/poste.entity';

@Module({
  controllers: [PosteController],
  providers: [PosteService],
  imports:[TypeOrmModule.forFeature([Poste])],
  exports: [PosteService], // If you want to use PosteService in other modules

})
export class PosteModule {}
