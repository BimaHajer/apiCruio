import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuyingService } from './buying.service';
import { CreateBuyingDto } from './dto/create-buying.dto';
import { UpdateBuyingDto } from './dto/update-buying.dto';

@Controller('buying')
export class BuyingController {
  constructor(private readonly buyingService: BuyingService) {}

  @Post("create-buying")
  create(@Body() createBuyingDto: CreateBuyingDto) {
    console.log("In Controller:",createBuyingDto);
    return this.buyingService.create(createBuyingDto);
  }

  @Get("list-buying")
  findAll() {
    return this.buyingService.findAll();
  }

  @Get('get-buying/:id')
  findOne(@Param('id') id: number) {
    return this.buyingService.findOne(id);
  }

  @Patch('update-buying/:id')
  update(@Param('id') id: number, @Body() updateBuyingDto: UpdateBuyingDto) {
    return this.buyingService.update(id, updateBuyingDto);
  }

  @Delete('delete-buying/:id')
  remove(@Param('id') id: number) {
    return this.buyingService.remove(id);
  }

  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete:any) {
    console.log("In Controller:",toDelete)
    return this.buyingService.removeMultiple(toDelete)}

}
