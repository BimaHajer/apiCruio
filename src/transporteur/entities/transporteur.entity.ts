import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transporteur')
export class Transporteur {
 
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
 
    @Column("text", { name: "name" })
    name: string;
 
    @Column("text", { name: "description", nullable: true })
    description: string | null;
 
    @Column("integer", { name: "tel", nullable: true })
    tel: number | null;
 
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;
 
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;
 
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
 
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
 
    @Column("boolean", { name: "active", nullable: true, default: () => "true"  })
    active: boolean | null;
    
 
    // @OneToMany(() => ContactsEntity, (contact: ContactsEntity) => contact.carrierId, {cascade:true})
    // contacts: ContactsEntity[];
 
 
    @BeforeInsert()
    eventCreatedAt() {
      this.createdAt = new Date();
    }
  
    @BeforeUpdate()
    eventUpdatedAt() {
      this.updatedAt = new Date();
    }
}
