import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const newInvoice = this.invoiceRepository.create(createInvoiceDto);
    return await this.invoiceRepository.save(newInvoice);
  }

  async findAll(customerId?: number, limit?: number): Promise<Invoice[]> {
    const queryBuilder = this.invoiceRepository.createQueryBuilder('invoice');
    
    queryBuilder
      .leftJoinAndSelect('invoice.CustomerId', 'customer')
      .leftJoinAndSelect('invoice.transactions', 'transactions')
      .leftJoinAndSelect('invoice.commandId', 'command');
    
    if (customerId) {
      queryBuilder.where('invoice.CustomerId = :customerId', { customerId });
    }
    
    if (limit) {
      queryBuilder.take(10);
    }
    
    const invoices = await queryBuilder.getMany();  // Utiliser getMany() au lieu de getManyAndCount()
    
    return invoices;
  }
  

  async findOneById(id: number): Promise<Invoice | null> {
    const invoice = await this.invoiceRepository.findOne({
      relations: ['CustomerId', 'invoicedetail', 'transactions', 'commandId'],
      where: { id },
    });
    return invoice;
  }

  async update(id: number, userId: number, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
    const invoice = await this.invoiceRepository.findOne({ where: { id } });
    if (!invoice) {
      throw new NotFoundException(`Invoice #${id} not found`);
    }

    const invoicePreload = await this.invoiceRepository.preload({
      id,
      ...updateInvoiceDto,
      updatedBy: userId,
    });

    if (!invoicePreload) {
      throw new NotFoundException(`Invoice #${id} could not be updated`);
    }

    return this.invoiceRepository.save(invoicePreload);
  }

  async remove(id: number): Promise<void> {
    const result = await this.invoiceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Invoice #${id} not found`);
    }
  }

  async removeMultiple(toDelete: number[]): Promise<boolean> {
    const allIntegers = toDelete.every(item => Number.isInteger(item));
    if (!allIntegers) {
      console.log('Invalid data in toDelete array');
      return false;
    }

    const result = await this.invoiceRepository.delete(toDelete);
    return result.affected > 0;
  }
}
