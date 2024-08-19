import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn , } from "typeorm";
@Entity('departement')
export class Departement {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"department_name", })
    department_name: string;
    @Column( 'text',{name:"location", })
    location: string;
    @Column('date',{name:"createAt",nullable:true})
    createAt:Date;
    @Column('date',{name:"update",nullable:true})
    updateAt:Date;
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


