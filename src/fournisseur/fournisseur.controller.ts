import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';

@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}

  @Post("add-fournisseur")
  create(@Body() createFournisseurDto: CreateFournisseurDto) {
    return this.fournisseurService.create(createFournisseurDto);
  }

  @Get("list-fournisseur")
  findAll() {
    return this.fournisseurService.findAll();
  }

  @Get('get-fournisseur/:id')
  findOne(@Param('id') id: number) {
    return this.fournisseurService.findOne(id);
  }

  @Patch('update-fournisseur/:id')
  update(@Param('id') id: number, @Body() updateFournisseurDto: UpdateFournisseurDto) {
    return this.fournisseurService.update(id, updateFournisseurDto);
  }

  @Delete('delete-fournisseur/:id')
  remove(@Param('id') id: number) {
    return this.fournisseurService.remove(id);
  }
}
