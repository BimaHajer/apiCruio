import { PartialType } from '@nestjs/swagger';
import { CreatePosteDto } from './create-poste.dto';

export class UpdatePosteDto extends PartialType(CreatePosteDto) {}
