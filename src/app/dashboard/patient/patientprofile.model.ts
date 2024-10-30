
export class PatientProfileModel {
    name!: string;
    dateOfBirth!: string;
    phone!: string;
    email!: string;
    address!: string;
    gender!: string;
    avatar!: string;
    medicalHistory!: MedicalHistory[]; 
    allergies!: Allergy[]; 
}

export class MedicalHistory {
    condition!: string;
    diagnosisDate!: string;
    notes!: string;
}

export class Allergy {
    substance!: string;
    reaction!: string;
}
