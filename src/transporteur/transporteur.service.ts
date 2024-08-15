import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransporteurDto } from './dto/create-transporteur.dto';
import { UpdateTransporteurDto } from './dto/update-transporteur.dto';
import { Transporteur } from './entities/transporteur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';

@Injectable()
export class TransporteurService {
  constructor(@InjectRepository(Transporteur)
    private readonly carrierRepository: Repository<Transporteur>,
    ) { }
  create(createTransporteurDto: CreateTransporteurDto) {
    let carrier=this.carrierRepository.create(createTransporteurDto)
    this.carrierRepository.save(carrier)
  }

 async findAll() {
    const carrier= await createQueryBuilder(Transporteur,"Transporteur")
    // .where('BuyingInvoice.id =:id',{id:id})
    .take(10)
    .getManyAndCount()
  }

  findOne(id: number) {
return this.carrierRepository.findOne({where:{id:id}})  }

  async update(id: number, updateTransporteurDto: UpdateTransporteurDto) {
    let transporteur= await this.carrierRepository.preload({
      id:+id,
      ...updateTransporteurDto,
    })
    if (!transporteur) {
      throw new NotFoundException(`transaction #${id} not found`);
    }
     return this.carrierRepository.save(transporteur)

  }

  async remove(id: number,updateTransporteurDto: UpdateTransporteurDto) {
    let transporteur= await this.carrierRepository.preload({
      id:+id,
      active:false,
      ...updateTransporteurDto
    })
    if (!transporteur) {
      throw new NotFoundException(`transaction #${id} not found`);
    }
   return  this.carrierRepository.save(transporteur)
  }
}
