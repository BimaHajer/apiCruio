import { Buying } from "src/buying/entities/buying.entity";
import { Contact } from "src/contact/entities/contact.entity";
import { AfterInsert, AfterUpdate, Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";

@Entity("fournisseur")
export class Fournisseur {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;
    @Column("text",{name:"name",nullable:true})
    name:string
    @Column("integer",{name:"tel",nullable:true})
    tel:number
    @Column("text",{name:"description",nullable:true})
    description:string
    @Column("boolean",{name:"active",nullable:true,default:true})
    active:boolean
    
    // @Column("text",{name:"password",nullable:true})
    // password:string

/// champs  system
    @Column("integer",{  nullable: true })
    createdBy: number;
    @Column("date",{  nullable: true })
    createdAt: Date;
    @Column("integer",{  nullable: true })
    updatedBy: number;
    @Column("date",{  nullable: true })
    updatedAt: Date;
   
    ///relations
    @OneToMany(() => Contact, (contact: Contact) => contact.providerid, { cascade: true })
    contacts: Contact[];

    @OneToMany(()=>Buying,(buying:Buying)=>buying.id)
    buyings:Buying[];
    
    @AfterInsert()
    eventCreatedAt() {
      this.createdAt = new Date();
    }
    @AfterUpdate()
    eventUpdatedAt() {
      this.updatedAt=new Date()
    }

}


