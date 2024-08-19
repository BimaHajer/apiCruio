import { Module } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { DepartementController } from './departement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Departement } from './entities/departement.entity';

@Module({
  controllers: [DepartementController],
  providers: [DepartementService],
  imports:[TypeOrmModule.forFeature([Departement])] //configuring the userRepository 

})
export class DepartementModule {}
