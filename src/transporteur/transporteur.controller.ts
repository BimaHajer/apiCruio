import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransporteurService } from './transporteur.service';
import { CreateTransporteurDto } from './dto/create-transporteur.dto';
import { UpdateTransporteurDto } from './dto/update-transporteur.dto';

@Controller('transporteur')
export class TransporteurController {
  constructor(private readonly transporteurService: TransporteurService) {}

  @Post('add-transporteur')
  create(@Body() createTransporteurDto: CreateTransporteurDto) {
    console.log(' hello controller');
    return this.transporteurService.create(createTransporteurDto);
  }
  @Post('login-transporteur') //router
  loginUser(@Body('id') id: number, @Body('password') password: string) {
    console.log('id', id);
    return this.transporteurService.login(id, password);
  }

  @Get('list-transporteur')
  findAll() {
    return this.transporteurService.findAll();
  }

  @Get('transporteur/:id')
  findOne(@Param('id') id: number) {
    return this.transporteurService.findOne(id);
  }

  @Patch('update-transporteur/:id')
  update(
    @Param('id') id: Number,
    @Body() updatetransporteurDto: UpdateTransporteurDto,
  ) {
    return this.transporteurService.update(+id, updatetransporteurDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.transporteurService.remove(id);
  }
}
