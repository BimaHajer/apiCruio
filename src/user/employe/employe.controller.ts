import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Controller('employe')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post('create-employer')
  create(@Body() createEmployeDto: CreateEmployeDto) {
    console.log('employer',createEmployeDto)
    return this.employeService.create(createEmployeDto);
  }

  @Get('list-employer')
  findAll() {
    return this.employeService.findAll();
  }

  @Get('employer/:id')
  findOne(@Param('id') id: number) {
    return this.employeService.findOne(+id);
  }

  @Patch('update-employer/:id')
  update(@Param('id') id: number, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employeService.update(+id, updateEmployeDto);
  }

  @Delete('delete-employer/:id')
  remove(@Param('id') id: number) {
    return this.employeService.remove(+id);
  }
}
