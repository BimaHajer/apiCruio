import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuyingDto } from './dto/create-buying.dto';
import { UpdateBuyingDto } from './dto/update-buying.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buying } from './entities/buying.entity';

@Injectable()
export class BuyingService {

  constructor(
    @InjectRepository(Buying)
    private readonly buyingRepository: Repository<Buying>,
  ) { }

  create(createBuyingDto: CreateBuyingDto) {
    let buying=this.buyingRepository.create(createBuyingDto)
    return this.buyingRepository.save(buying)
  }

  findAll() {
    return this.buyingRepository.findAndCount()
  }

  findOne(id: number) {
    return this.buyingRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateBuyingDto: UpdateBuyingDto): Promise<Buying> {
    const buyingPreload =await this.buyingRepository.preload({
      id:+id,
    ...updateBuyingDto,
    });
    if (!buyingPreload){
      throw new NotFoundException (`buying#${id} not found`);
    }
    else{
      
      return await this.buyingRepository.save(buyingPreload)
    }
  }

  remove(id: number) {
    return this.buyingRepository.delete(id)
  }
}
