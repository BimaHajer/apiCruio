import { PartialType } from '@nestjs/swagger';
import { CreateBuyingDto } from './create-buying.dto';

export class UpdateBuyingDto extends PartialType(CreateBuyingDto) {
    total_price:number
    isActive:boolean
    isComplete:boolean
    isValid:boolean
}
