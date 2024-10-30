import { DepartmentModel } from "../../../admin/crud/department/department.model";
import { DoctorModel } from "../../../admin/crud/doctor/doctor.model";

export class RecepAppointment {
    id!: string;
    patientName!: string;
    patientEmail!: string;
    appointmentDate!: string;
    appointmentTime!: string; 

    department: DepartmentModel = new DepartmentModel();
    doctor: DoctorModel = new DoctorModel();

}


