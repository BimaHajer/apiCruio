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
     console.log("In service:",createBuyingDto)
    return this.buyingRepository.save(buying)
  }

  findAll() {

    return this.buyingRepository.findAndCount({relations:["idProvider","buyingDetails","buyingDetails.productId"]})
  }

  findOne(id: number) {
    return this.buyingRepository.findOne({where:{id:id},relations:["idProvider","buyingDetails","buyingDetails.productId"]})
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


  remove(id:number)
  {
    return this.buyingRepository.delete(id)
  }


  async removeMultiple(toDelete: any) {   
     
    let resultDelete: boolean = null
    let resultDisable: boolean = null
    const allIntegers = toDelete.every(item => Number.isInteger(item));
    if (!allIntegers) {
      console.log('Invalid data in toDelete array');
      // Handle the error appropriately
      return;
    }

    if (toDelete.length != 0) {
      if (await this.buyingRepository.delete(toDelete)) {
        resultDelete = true
      } else
        resultDelete = false
        console.log("buyingRepository",this.buyingRepository)
    }
    console.log("Deleted(In Service):",this.buyingRepository)
  return true 
  }
}

