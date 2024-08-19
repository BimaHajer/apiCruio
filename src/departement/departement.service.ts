import { Injectable } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './entities/departement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private DepartementRepository    : Repository<Departement>,
  ) {}

  async create(createDepartementDto: CreateDepartementDto) {
let departemnt=this.DepartementRepository.create(createDepartementDto)
return this.DepartementRepository.save(departemnt)
  }






  async findAll() {
    return await this.DepartementRepository.findAndCount(); 
  }

  async findOne(id: number): Promise<Departement | undefined> {
    return await this.DepartementRepository.findOne({where:{id:id}}); 
  }

  async update(id_deparement: number, updateDepartementDto: UpdateDepartementDto): Promise<Departement> {
let departement= await this.DepartementRepository.preload({
  id:id_deparement,
  ... updateDepartementDto
})
return this.DepartementRepository.save(departement)
//============== with preload


}

  remove(id: number) {
    return this.DepartementRepository.delete(id)
  }
}
