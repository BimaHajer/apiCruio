import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("poste")
export class Poste {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text',{name:"description",nullable:true})
    description:string
    @Column('text',{name:"titre",nullable:true})
    titre:string
    @Column('integer',{name:"nbDeEmployes",nullable:true})
    nbDeEmployes:number
    @Column('date',{name:"createAt",nullable:true})
    createAt:Date;
    @Column('date',{name:"update",nullable:true})
    updateAt:Date;
    @Column('integer',{name:"createby",nullable:true})
    createBy:number;
    @Column('integer',{name:"updateBy",nullable:true})
    updatedBy: number;
    @Column('boolean',{name:"active",nullable:true})
    isActive:boolean
  


@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
