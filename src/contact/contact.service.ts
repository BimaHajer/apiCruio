import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly ProviderRepository: Repository<Contact>,
  ) { }
  create(createContactDto: CreateContactDto) {
    let contact=this.ProviderRepository.create(createContactDto)
    return   this.ProviderRepository.save(contact)
  }

  findAll() {
   return this.ProviderRepository.findAndCount({relations:["providerId"]})
}  

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

   async update(id: number, updateContactDto: UpdateContactDto): Promise<Contact> {
    const contactPreload = await this.ProviderRepository.preload({
      id: +id,
      ...updateContactDto,
    });
    if (!contactPreload) {
      throw new NotFoundException(`contact #${id} not found`);
    }
    return await this.ProviderRepository.save(contactPreload);
    
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
