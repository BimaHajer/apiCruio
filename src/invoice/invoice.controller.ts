import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post('create')
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get("invoice-list")
  async findAll() {
    const [invoices, count] = await this.invoiceService.findAll();
    return invoices;
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOneById(+id);
  } 

  @Patch(':id')
  async updateInvoice(@Param('id') id: number, @Body() updateInvoiceDto: UpdateInvoiceDto) {
   let userId=1
    return this.invoiceService.update(id,userId, updateInvoiceDto,);
  } 

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.invoiceService.remove(id);
  }
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.invoiceService.removeMultiple(toDelete);
  }
}
