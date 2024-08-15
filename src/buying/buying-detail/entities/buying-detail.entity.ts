import { ApiProperty } from "@nestjs/swagger";
import { Buying } from "src/buying/entities/buying.entity";
import { Product } from "src/products/entities/product.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("buying-detail")
export class BuyingDetail {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
  
    @ApiProperty()
    @Column("integer", { name: "tax", nullable: true })
    tax: number | null;
  
    @ApiProperty()
    @Column("double precision", { name: "price", nullable: true })
    price: number | null;
  
    @ApiProperty()
    @Column("double precision", { name: "amount", nullable: true })
    amount: number | null;
  
    @ApiProperty()
    @Column("integer", { name: "quantity", nullable: true })
    quantity: number | null;
  
    @ApiProperty()
    @Column("integer", { name: "discount", nullable: true })
    discount: number | null;
  
  
  
  
    @ApiProperty()
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;
  
    @ApiProperty()
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;
  
    @ApiProperty()
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
  
    @ApiProperty()
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
  
    @ApiProperty()
    @Column("boolean", { name: "active", nullable: true, default: () => "true" })
    active: boolean | null;
  
    
  
    @ApiProperty()
    @ManyToOne(() => Product, (product: Product) => product.id)
    @JoinColumn({ name: "productid" })
    productId: number | null;

    @ManyToOne(()=> Buying,(buying:Buying)=>buying.id)
    @JoinColumn({ name: "buyingId" })
    buyingId:number
  
  
  
    @BeforeInsert()
    eventCreatedAt() {
      this.createdAt = new Date();
    }
  
    @BeforeUpdate()
    eventUpdatedAt() {
      this.updatedAt = new Date();
    }
}
