import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './shared/activities/activities.component';
import { AddnurseComponent } from './dashboard/admin/crud/nurse/addnurse/addnurse.component';
import { ViewnurseComponent } from './dashboard/admin/crud/nurse/viewnurse/viewnurse.component';
import { UpdatenurseComponent } from './dashboard/admin/crud/nurse/updatenurse/updatenurse.component';
import { AdddoctorComponent } from './dashboard/admin/crud/doctor/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './dashboard/admin/crud/doctor/viewdoctor/viewdoctor.component';
import { UpdatedoctorComponent } from './dashboard/admin/crud/doctor/updatedoctor/updatedoctor.component';
import { BodyhomeComponent } from './landingPage/bodyhome/bodyhome.component';
import { AppointmenthomeComponent } from './landingPage/homeAppointment/appointmenthome/appointmenthome.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { ForgotpasswordComponent } from './registration/forgotpassword/forgotpassword.component';
import { SalarysettingsComponent } from './shared/salarysettings/salarysettings.component';
import { LeavetypeComponent } from './shared/leavetype/leavetype.component';
import { ChngpassComponent } from './shared/chngpass/chngpass.component';
import { AdminpayrollComponent } from './shared/adminpayroll/adminpayroll.component';
import { ViewdepartmentComponent } from './dashboard/admin/crud/department/viewdepartment/viewdepartment.component';
import { AdddepartmentComponent } from './dashboard/admin/crud/department/adddepartment/adddepartment.component';
import { UpdatedepartmentComponent } from './dashboard/admin/crud/department/updatedepartment/updatedepartment.component';
import { ViewReceptionistComponent } from './dashboard/admin/crud/receptionist/viewreceptionist/viewreceptionist.component';
import { UpdateReceptionistComponent } from './dashboard/admin/crud/receptionist/updatereceptionist/updatereceptionist.component';
import { AddReceptionistComponent } from './dashboard/admin/crud/receptionist/addreceptionist/addreceptionist.component';
import { MyprofileComponent } from './dashboard/admin/profile/myprofile/myprofile.component';
import { EditprofileComponent } from './dashboard/admin/profile/editprofile/editprofile.component';
import { DepartmenthomeComponent } from './landingPage/departmenthome/departmenthome.component';
import { DoctorshomeComponent } from './landingPage/DoctorsDepartment/doctorshome/doctorshome.component';
import { MyprofiledocComponent } from './dashboard/doctor/profile/myprofiledoc/myprofiledoc.component';
import { EditprofiledocComponent } from './dashboard/doctor/profile/editprofiledoc/editprofiledoc.component';
import { MyprofilenrsComponent } from './dashboard/nurse/profile/myprofilenrs/myprofilenrs.component';
import { EditprofilenrsComponent } from './dashboard/nurse/profile/editprofilenrs/editprofilenrs.component';
import { MyprofilepntComponent } from './dashboard/patient/ profile/myprofilepnt/myprofilepnt.component';
import { EditprofilepntComponent } from './dashboard/patient/ profile/editprofilepnt/editprofilepnt.component';
import { MyprofilerecepComponent } from './dashboard/receptionist/profile/myprofilerecep/myprofilerecep.component';
import { EditprofilerecepComponent } from './dashboard/receptionist/profile/editprofilerecep/editprofilerecep.component';
import { DoctorlistadminComponent } from './dashboard/admin/crud/doctor/doctorlistadmin/doctorlistadmin.component';
import { NurselistadminComponent } from './dashboard/admin/crud/nurse/nurselist/nurselistadmin.component';
import { ReceptionistlistadminComponent } from './dashboard/admin/crud/receptionist/receptionistlistadmin/receptionistlistadmin.component';
import { AddappointmentComponent } from './dashboard/receptionist/crud/ appointment/addappointment/addappointment.component';
import { UpdateappointmentComponent } from './dashboard/receptionist/crud/ appointment/updateappointment/updateappointment.component';
import { ViewappointmentComponent } from './dashboard/receptionist/crud/ appointment/viewappointment/viewappointment.component';
import { ListofappointmentComponent } from './dashboard/receptionist/crud/ appointment/listofappointment/listofappointment.component';
import { CardiacdepartmentComponent } from './landingPage/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import { ChilddepartmentComponent } from './landingPage/DoctorsDepartment/childdepartment/childdepartment.component';
import { GeneraldepartmentComponent } from './landingPage/DoctorsDepartment/generaldepartment/generaldepartment.component';
import { NeurodepartmentComponent } from './landingPage/DoctorsDepartment/neurodepartment/neurodepartment.component';
import { OrthopedicsdepartmentComponent } from './landingPage/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import { AddpatientdocComponent } from './dashboard/doctor/crud/patient/addpatientdoc/addpatientdoc.component';
import { UpdatepatientdocComponent } from './dashboard/doctor/crud/patient/updatepatientdoc/updatepatientdoc.component';
import { ViewpatientdocComponent } from './dashboard/doctor/crud/patient/viewpatientdoc/viewpatientdoc.component';
import { AuthGuard } from './security/Guard/authguard.guard';
import { RoleGuard } from './security/Guard/role.guard';
import { LastappointmentComponent } from './landingPage/lastappointment/lastappointment.component';
import { WelcomepageComponent } from './shared/welcomepage/welcomepage.component';
import { ListofpatientComponent } from './dashboard/doctor/crud/patient/listofpatient/listofpatient.component';

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },

  // Home or Landing Page
  { path: 'home', component: BodyhomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'appointment', component: AppointmenthomeComponent },
  { path: 'departmenthome', component: DepartmenthomeComponent },
  { path: 'doctorshome', component: DoctorshomeComponent },
  { path: 'lastappointment', component: LastappointmentComponent },
  { path: 'welcome', component: WelcomepageComponent },


  // Admin part
  // Adim > Doctor Crud
  {
    path: 'adddoctor', component: AdddoctorComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'viewdoctor', component: ViewdoctorComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'updatedoctor/:id', component: UpdatedoctorComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'doctorlistadmin', component: DoctorlistadminComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },

  // Admin > Nurse Crud
  {
    path: 'addnurse', component: AddnurseComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'viewnurse', component: ViewnurseComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'updatenurse/:id', component: UpdatenurseComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'nurselistadmin', component: NurselistadminComponent, canActivate: [AuthGuard]
  },

  // Admin > Receptionist Curd
  {
    path: 'viewrecep', component: ViewReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'updaterecep/:id', component: UpdateReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'addrecep', component: AddReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'receplistadmin', component: ReceptionistlistadminComponent, canActivate: [AuthGuard]
  },

  // Admin > Department Crud
  { path: 'viewdepartment', component: ViewdepartmentComponent, canActivate: [AuthGuard] },
  {
    path: 'updatedepartment/:id', component: UpdatedepartmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'adddepartment', component: AdddepartmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },



  // Admin > Other Component
  {
    path: 'salary', component: SalarysettingsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'leave', component: LeavetypeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'changepassword', component: ChngpassComponent, canActivate: [AuthGuard]
  },
  {
    path: 'payroll', component: AdminpayrollComponent, canActivate: [AuthGuard]
  },


  // Profile Part

  // Admin > Profile
  {
    path: 'adminprofile', component: MyprofileComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'adminprofileedit', component: EditprofileComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },

  // Doctor > Profile
  {
    path: 'doctorprofile', component: MyprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },
  {
    path: 'doctorprofileedit', component: EditprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },

  // Nurse > Profile
  {
    path: 'nurseprofile', component: MyprofilenrsComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'nurse' }
  },
  {
    path: 'nurseprofileedit', component: EditprofilenrsComponent, canActivate: [AuthGuard],
    data: { role: 'nurse' }
  },

  // Patient > Profile
  {
    path: 'patientprofile', component: MyprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'patientprofileedit', component: EditprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },

  // Receptionist > Profile
  {
    path: 'receptionist-profile', component: MyprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'receptionist' }
  },
  {
    path: 'receptionist-profile-edit', component: EditprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'receptionist' }
  },




  // Receptionist Part

  // Receptionist > Appointment for all
  {
    path: 'addappointment', component: AddappointmentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'updateappointment/:id', component: UpdateappointmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: ['admin'] }
  },
  {
    path: 'viewappointment', component: ViewappointmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: ['admin'] }
  },
  { path: 'listappointment', component: ListofappointmentComponent },

  // Department Home Routing
  { path: 'cardiac', component: CardiacdepartmentComponent },
  { path: 'childdepart', component: ChilddepartmentComponent },
  { path: 'generaldepart', component: GeneraldepartmentComponent },
  { path: 'neurodepart', component: NeurodepartmentComponent },
  { path: 'orthodepart', component: OrthopedicsdepartmentComponent },



  // Patient Part
  {
    path: 'addpatient', component: AddpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },
  {
    path: 'updatepatient/:id', component: UpdatepatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },
  {
    path: 'viewpatient', component: ViewpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },
  { path: 'patientlist', component: ListofpatientComponent },




  // Auth Part
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgotpasswordComponent },
  // {
  //   path: 'logout', component: LogoutComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: { role: ['admin', 'user', 'doctor', 'nurse', 'receptionist'] }
  // },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
