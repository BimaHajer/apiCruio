import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Fournisseur } from './entities/fournisseur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import * as bcrypt from 'bcrypt'
@Injectable()
export class FournisseurService {
  constructor(
    @InjectRepository(Fournisseur)
    private fournisseurRepository: Repository<Fournisseur>,
  ) {}

  //create
  async create(createFournisseurDto: CreateFournisseurDto) {
    let fournisseur=this.fournisseurRepository.create(createFournisseurDto)
    return this.fournisseurRepository.save(fournisseur)
  }

  ///read

  findAll() {
    return this.fournisseurRepository.findAndCount()
  }

  findOne(id: number) {
    return this.fournisseurRepository.findOne({where:{id:id}})
  }


  ///update

  async update(id: number, updateFournisseurDto: UpdateFournisseurDto): Promise<Fournisseur> {
    const fournisseur =await this.fournisseurRepository.preload({
      id:+id,
    ...updateFournisseurDto,
    });
    if (!fournisseur){
      throw new NotFoundException (`provider#${id} not found`);
    }
    else{
      
      return await this.fournisseurRepository.save(fournisseur)
    }
  }

  ///delete

  remove(id: number) {
    return this.fournisseurRepository.delete(id)
  }
}
