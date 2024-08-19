import { Injectable } from '@nestjs/common';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employe } from './entities/employe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeService {
  constructor(   
    @InjectRepository(Employe)
    private employerRepository: Repository<Employe>,
  ) {}

  create(createEmployeDto: CreateEmployeDto) {
    let employe = this.employerRepository.create(createEmployeDto);
    return this.employerRepository.save(employe);
  }

   findAll() {
    return  this.employerRepository.findAndCount();
  }

   findOne(id_employer: number) {
    return this.employerRepository.findOne({where:{id:id_employer}})
    
  }

  async update(id: number, updateEmployeDto: UpdateEmployeDto) {
    let employe=await this.employerRepository.preload({
      id:id,
      ...updateEmployeDto
      
    })
    return this.employerRepository.save(employe)    
  }

  remove(id: number) {
return this.employerRepository.delete(id)  }
}