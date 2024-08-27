import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity('employees')
export class Employe {
  
  @PrimaryGeneratedColumn()
  id: number;  

  @Column('text', { name: "firstName", nullable: true })
  firstName: string;

  @Column('text', { name: "lastName", nullable: true })
  lastName: string;

  @Column('text', { name: "email", nullable: true, unique: true })
  email: string;

  @Column('text', { name: "telephone", nullable: true })
  telephone: string;
  @Column('text', { name: "role", nullable: true })
  role: string;
  @Column('text', { name: "password", nullable: true })
  password: string;
  @Column('text', { name: "confirmPassword", nullable: true })
  confirmPassword: string;

  @Column('date', { name: "date_of_birth", nullable: true })
  date_of_birth: Date;

  @Column('text', { name: "gender", nullable: true })
  gender: string;

  @Column('text', { name: "address", nullable: true })
  address: string;

  @Column('text', { name: "national_id_number", nullable: true })
  national_id_number: string;

  @Column('date', { name: "hire_date", nullable: true })
  hire_date: Date;

  @Column('text', { name: "job_title", nullable: true })
  job_title: string;

//   @Column('integer', { name: "department_id", nullable: true })
//   department_id: number;  // Foreign Key to Department

  @Column('integer', { name: "manager_id", nullable: true })
  manager_id: number;  // Foreign Key to Employee

  @Column('decimal', { name: "salary", nullable: true })
  salary: number;

  @Column('text', { name: "employment_status", nullable: true })
  employment_status: string;

  @Column('text', { name: "photo_url", nullable: true })
  photo_url: string;

  @Column('text', { name: "emergency_contact_name", nullable: true })
  emergency_contact_name: string;

  @Column('text', { name: "emergency_contact_phone", nullable: true })
  emergency_contact_phone: string;

  @Column('date', { name: "created_at", nullable: true })
  created_at: Date;

  @Column('date', { name: "updated_at", nullable: true })
  updated_at: Date;

  @BeforeInsert()
  createATDate(): void {
    this.created_at = new Date();
  }

  @BeforeUpdate()
  updateATDate(): void {
    this.updated_at = new Date();
  }
}
