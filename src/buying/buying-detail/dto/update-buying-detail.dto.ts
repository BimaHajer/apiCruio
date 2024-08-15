import { PartialType } from '@nestjs/swagger';
import { CreateBuyingDetailDto } from './create-buying-detail.dto';

export class UpdateBuyingDetailDto extends PartialType(CreateBuyingDetailDto) {
    tax: number
    price: number
    amount: number
    quantity: number
    discount: number
}
