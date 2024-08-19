import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Controller('employe')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post('create-empoye')
  create(@Body() createEmployeDto: CreateEmployeDto) {
    return this.employeService.create(createEmployeDto);
  }

  @Get('list-employe')
  findAll() {
    return this.employeService.findAll();
  }

  @Get('employe/:id')
  findOne(@Param('id') id: number) {
    return this.employeService.findOne(+id);
  }

  @Patch('update-employe/:id')
  update(@Param('id') id: number, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employeService.update(+id, updateEmployeDto);
  }

  @Delete('delete-employer/:id')
  remove(@Param('id') id: number) {
    return this.employeService.remove(+id);
  }
}
