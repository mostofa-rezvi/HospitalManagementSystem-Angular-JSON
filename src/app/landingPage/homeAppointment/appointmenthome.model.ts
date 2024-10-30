export class Root {
    
    id!: string; 
    patientName!: string;
    patientEmail!: string;
    appointmentDate!: string; 
    appointmentTime!: string;


    departments!: {
        id: string;
        name: string;
    };
    doctors!: {
        drid: string;
        firstname: string; 
    };
   
}