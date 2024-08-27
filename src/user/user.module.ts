import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EmployeModule } from './employe/employe.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports:[TypeOrmModule.forFeature([User]), EmployeModule]  
})
export class UserModule {}
