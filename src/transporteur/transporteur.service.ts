import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransporteurDto } from './dto/create-transporteur.dto';
import { UpdateTransporteurDto } from './dto/update-transporteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transporteur } from './entities/transporteur.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { id } from '@clr/core/internal';
@Injectable()
export class TransporteurService {
  constructor(
    @InjectRepository(Transporteur)
    private userRepository: Repository<Transporteur>,
  ) {}
  create(createTransporteurDto: CreateTransporteurDto) {
    let user = this.userRepository.create(createTransporteurDto);
    return this.userRepository.save(user);
  }
  async login(id: number, password: string) {
    let user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new Error('User not found');
    } else {
      const isPasswordValid = await bcrypt.compare(
        password,
        (await user).password.toString(),
      );
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
    }
    return user;
  }

  findAll() {
    return this.userRepository.findAndCount();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }
  async update(
    id: number,
    updateTransporteurDto: UpdateTransporteurDto,
  ): Promise<Transporteur> {
    const user = await this.userRepository.preload({
      id: +id,
      ...updateTransporteurDto,
    });
    if (!user) {
      throw new NotFoundException('user#$(id) not found');
    }
    return await this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
