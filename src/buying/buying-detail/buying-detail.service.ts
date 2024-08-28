import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuyingDetailDto } from './dto/create-buying-detail.dto';
import { UpdateBuyingDetailDto } from './dto/update-buying-detail.dto';
import { BuyingDetail } from './entities/buying-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BuyingDetailService {

  constructor(
    @InjectRepository(BuyingDetail)
    private readonly detailRepository: Repository<BuyingDetail>,
  ) { }

  create(createBuyingDetailDto: CreateBuyingDetailDto) {
    let detail=this.detailRepository.create(createBuyingDetailDto)
    return this.detailRepository.save(detail)
  }

  findAll() {
    return this.detailRepository.findAndCount({relations:["BuyingId","productId"]})  }

  findOne(id: number) {
    return this.detailRepository.findOne({where:{id:id},relations:["BuyingId","productId"]})
  }

  async update(id: number, updateBuyingDetailDto: UpdateBuyingDetailDto): Promise<BuyingDetail> {
    const detailPreload = await this.detailRepository.preload({
      id: +id,
      ...updateBuyingDetailDto,
    });
    if (!detailPreload) {
      throw new NotFoundException(`detail#${id}not found`);
    }
    return await this.detailRepository.save(detailPreload);
  }

  remove(id: number) {
    return this.detailRepository.delete(id)  }
}
