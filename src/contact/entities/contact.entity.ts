

import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity("Contact")
export class Contact {
    
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    
    @Column("text", { name: "firstname", nullable: true })
    titleContact: string | null;

    
    @Column("text", { name: "lastname", nullable: true })
    descriptionContact: string | null;

    
    @Column("double precision", { name: "tel", nullable: true })
    tel: number | null;

    
    @Column("integer", { name: "fax", nullable: true })
    fax: number | null;

    
    @Column("text", { name: "email", nullable: true })
    email: string | null;


    
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;

    
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;

    
    @Column("timestamp with time zone", { nullable: true })
    updatedAt: Date | null;

    
    @Column("integer", { nullable: true })
    updatedBy: number | null;

    
    @Column("boolean", { name: "active", nullable: true, default: true })
    active: boolean | null;

    
    @ManyToOne(() => Fournisseur, (provider: Fournisseur) => provider.id)
    @JoinColumn({ name: "providerid" })
    providerId: number | null;

  

   

    

    
    
    @BeforeInsert()
    eventCreatedAt() {
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    eventUpdatedAt() {
        this.updatedAt = new Date();
    }

}
