import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
@Entity('transporteur')
export class Transporteur {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column('text', { name: 'name', nullable: true, default: 'name' })
  name: string;
  @Column('text', { name: 'description', unique: true, nullable: true })
  description: string;
  @Column('text', { name: 'tel', nullable: true })
  tel: number;
  @Column('date', { nullable: true })
  createdAt: Date;
  @Column('date', { nullable: true })
  updatedAt: Date;
  @Column('int', { name: 'createdBy', nullable: true })
  createdBy: number;
  @Column('int', { name: 'updatedBy', nullable: true })
  updatedBy: number;
  @Column('boolean', { name: 'active', default: true })
  active: boolean;
  @OneToMany((type) => Contact, (contact) => contact.transporteur)
  contacts: Contact[];
  password: any;
  @BeforeInsert()
  eventCreateAt() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
@Entity('contact')
export class Contact {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column('text', { name: 'name', nullable: true })
  name: string;
  @Column('text', { name: 'email', nullable: true })
  email: string;
  @Column('text', { name: 'phone', nullable: true })
  phone: string;
  @ManyToOne((type) => Transporteur, (transporteur) => transporteur.contacts)
  transporteur: Transporteur;
}
