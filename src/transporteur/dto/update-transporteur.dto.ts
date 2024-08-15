import { PartialType } from '@nestjs/swagger';
import { CreateTransporteurDto } from './create-transporteur.dto';

export class UpdateTransporteurDto extends PartialType(CreateTransporteurDto) {}
