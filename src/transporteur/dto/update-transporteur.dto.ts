import { PartialType } from '@nestjs/swagger';
import { CreateTransporteurDto } from './create-transporteur.dto';

export class UpdateTransporteurDto extends PartialType(CreateTransporteurDto) {
    public id?: number;
    public name?:string;
    public description?: string;
    public tel?: number;
    public createdAt?: Date;
    public updatedAt?: Date;
    public createdBy?: string;
    public updateBy?: string;
    public active?: boolean;
    public contact?: number;
}
