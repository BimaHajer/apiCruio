import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuyingDetailService } from './buying-detail.service';
import { CreateBuyingDetailDto } from './dto/create-buying-detail.dto';
import { UpdateBuyingDetailDto } from './dto/update-buying-detail.dto';

@Controller('buying-detail')
export class BuyingDetailController {
  constructor(private readonly buyingDetailService: BuyingDetailService) {}

  @Post("create-detail")
  create(@Body() createBuyingDetailDto: CreateBuyingDetailDto) {
    return this.buyingDetailService.create(createBuyingDetailDto);
  }

  @Get("list-detail")
  findAll() {
    return this.buyingDetailService.findAll();
  }

  @Get('get-detail/:id')
  findOne(@Param('id') id: number) {
    return this.buyingDetailService.findOne(id);
  }

  @Patch('update-detail/:id')
  update(@Param('id') id: number, @Body() updateBuyingDetailDto: UpdateBuyingDetailDto) {
    return this.buyingDetailService.update(id, updateBuyingDetailDto);
  }

  @Delete('delete-detail/:id')
  remove(@Param('id') id: number) {
    return this.buyingDetailService.remove(id);
  }
}
