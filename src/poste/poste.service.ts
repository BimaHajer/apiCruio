import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePosteDto } from './dto/create-poste.dto';
import { UpdatePosteDto } from './dto/update-poste.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Poste } from './entities/poste.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PosteService {
  
  constructor(   
    @InjectRepository(Poste)
    private  readonly posteResposity:Repository<Poste>,
  ){}
  async create(createPosteDto: CreatePosteDto) {
    let newPoste=this.posteResposity.create(createPosteDto)
    return await this.posteResposity.save(newPoste)
  }

  findAll() {
    return  this.posteResposity.findAndCount()
  }

  async findOne(id: number):Promise<object>{
    let  poste= await this.posteResposity.findOne({where:{id:id}})
     return Poste
    }

    async update( id: number ,UpdatePosteDto: UpdatePosteDto ) {
      const price = await this.posteResposity.findOne({where:{id:id}});
      if (!price) {
        throw new NotFoundException(`poste #${id} not found`);
      }
      const pricePreload = await this.posteResposity.preload({
        id: +id, 
        ...UpdatePosteDto,
       
      });  
  
      return this.posteResposity.save(pricePreload);
   
    }

    async remove(id: number) {
      return await this.posteResposity.delete(id);
    }
}
