import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BuyingDetail } from "../buying-detail/entities/buying-detail.entity";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";

@Entity("buying")
export class Buying {
    @PrimaryGeneratedColumn()
    id:number;
    @Column('float',{name:"total_price",nullable:true})
    total_price:number
    @Column('boolean',{name:"isActive",nullable:true,default:true})
    isActive:boolean
    @Column('boolean',{name:"isComplete",nullable:true,default:false})
    isComplete:boolean
    @Column('boolean',{name:"isValid",nullable:true,default:false})
    isValid:boolean

    ////champ systeme
    @Column('date',{name:"createAt",nullable:true})
    createAt:Date;
    @Column('date',{name:"update",nullable:true})
    updateAt:Date;
    @Column('integer',{name:"createby",nullable:true})
    createBy:number;
    @Column('integer',{name:"updateBy",nullable:true})
    updatedBy: number;

@ManyToOne(()=>Fournisseur,(provider:Fournisseur)=>provider.id)
@JoinColumn({name:"idProvider"})
idProvider:number


@OneToMany(() => BuyingDetail, (buyingDetail: BuyingDetail) => buyingDetail.buyingId, { cascade: true })
buyingDetails?: BuyingDetail[];


@BeforeInsert()
CreateATDate(): void{
   this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
        this.updateAt= new Date()
}

}
