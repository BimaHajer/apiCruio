import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransporteurDto } from './dto/create-transporteur.dto';
import { UpdateTransporteurDto } from './dto/update-transporteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transporteur } from './entities/transporteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransporteurService {
  transporteurResposity: any;
  constructor(   
    @InjectRepository(Transporteur)
    private transactionResposity:Repository<Transporteur>,
  ){}
  async create(createTransporteurDto: CreateTransporteurDto) {
    let newTransaction=this.transporteurResposity.create(createTransporteurDto)
  
    return await this.transporteurResposity.save(new Transporteur)
    
  }

  async findAll() {
    return await this.transporteurResposity.findAndCount()
  }

 
  async findOne(id: number) {
    let  transporteur= await this.transporteurResposity.findOne({where:{id:id}})
    return Transporteur
  }

  async update(id: number, updateTransporteurDto: UpdateTransporteurDto) {
    const transporteur = await this.transporteurResposity.preload({
      id: +id, 
      ...updateTransporteurDto,
      updatedBy: id, 
    }); 
    if (!Transporteur) {
      throw new NotFoundException(`transaction #${id} not found`);
    }

    return this.transactionResposity.save(transporteur);
  }

  async remove(id: number) {
    return await this.transporteurResposity.delete(id);
  }
}
