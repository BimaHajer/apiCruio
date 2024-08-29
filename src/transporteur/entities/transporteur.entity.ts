import { BeforeInsert, BeforeUpdate, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Transporteur {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"name", nullable:true})
    name: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
    @Column('text',{name:"tel",nullable:true})
    tel: number;
    @Column('date',{name:"createdAt",nullable:true})
    createdAt:Date;
    @Column('date',{name:"updatedAt",nullable:true})
    updatedAt:Date;
    @Column('text',{name:"createby",nullable:true})
    createBy:string;
    @Column('text',{name:"updatedBy",nullable:true})
    updatedBy:string;
    @Column('boolean',{name:"active",nullable:true})
    isActive:boolean;
    @Column('text',{name:"contacts",nullable:true})
    contacts: number;
    
    
@BeforeInsert()
CreateATDate(): void{
this.createdAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updatedAt= new Date()
}
}
