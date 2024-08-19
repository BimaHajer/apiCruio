import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';

@Controller('departement')
export class DepartementController {
  constructor(private readonly departementService: DepartementService) {}

  @Post('create-departement')
  create(@Body() createDepartementDto: CreateDepartementDto) {
    return this.departementService.create(createDepartementDto);
  }

  @Get('list-departement')
  findAll() {
    return this.departementService.findAll();
  }

  @Get('departement/:id')
  findOne(@Param('id') id: number) {
    return this.departementService.findOne(id);
  }

  @Patch('departement/:id')
  update(@Param('id') id: number, @Body() updateDepartementDto: UpdateDepartementDto) {
    return this.departementService.update(id, updateDepartementDto);
  }

  @Delete('departement/:id')
  remove(@Param('id') id: number) {
    return this.departementService.remove(id);
  }
}
