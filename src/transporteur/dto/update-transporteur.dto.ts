import { PartialType } from '@nestjs/mapped-types';
import { CreateTransporteurDto } from './create-transporteur.dto';

export class UpdateTransporteurDto extends PartialType(CreateTransporteurDto) {}
