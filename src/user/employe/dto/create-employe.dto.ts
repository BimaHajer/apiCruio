export class CreateEmployeDto {
    employee_id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string;
    date_of_birth: Date;
    gender: string;
    address?: string;
    national_id_number: string;
    hire_date: Date;
    job_title: string;
    department_id: number;
    manager_id?: number;
    salary: number;
    employment_status: string;
    photo_url?: string;
    emergency_contact_name?: string;
    emergency_contact_phone?: string;
    created_at?: Date;
    updated_at?: Date;
}
