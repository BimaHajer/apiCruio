import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { InvoiceService } from './invoice/invoice.service';
import { Invoice } from './invoice/entities/invoice.entity';
import { UpdateInvoiceDto } from './invoice/dto/update-invoice.dto';

@Controller('invoice')
export class AppController { 
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('invoice-list')
  getAllInvoices(): Promise<Invoice[]> {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  findInvoiceById(@Param('id') id: number): Promise<Invoice> {
    return this.invoiceService.findOneById(id);
  }

  @Post('create')
  addInvoice(@Body() invoice: Invoice): Promise<Invoice> {
    return this.invoiceService.create(invoice);
  }

  @Patch(':id')
  editInvoiceById(@Param('id') id: number, @Body() updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
    const userId = 1; 
    return this.invoiceService.update(id, userId, updateInvoiceDto);
  }

  @Delete(':id')
  deleteInvoice(@Param('id') id: number): Promise<void> {
    return this.invoiceService.remove(id);
  }
}
