import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransporteurService } from './transporteur.service';
import { CreateTransporteurDto } from './dto/create-transporteur.dto';
import { UpdateTransporteurDto } from './dto/update-transporteur.dto';

@Controller('transporteur')
export class TransporteurController {
  constructor(private readonly transporteurService: TransporteurService) {}

  @Post('create-transporteur')
  create(@Body() createTransporteurDto: CreateTransporteurDto) {
    return this.transporteurService.create(createTransporteurDto);
  }

  @Get('list-transporteur')
  findAll() {
    return this.transporteurService.findAll();
  }

  @Get('get-transporteur/:id')
  findOne(@Param('id') id: string) {
    return this.transporteurService.findOne(+id);
  }

  @Patch('update-transporteur/:id')
  update(@Param('id') id: string, @Body() updateTransporteurDto: UpdateTransporteurDto) {
    return this.transporteurService.update(+id, updateTransporteurDto);
  }

  @Patch('delete-transporteur/:id')
  remove(@Param('id') id: string,updateTransporteurDto: UpdateTransporteurDto) {
    return this.transporteurService.remove(+id,updateTransporteurDto);
  }
}
