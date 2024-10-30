import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './registration/navbar/navbar.component';
import { SidebarComponent } from './registration/sidebar/sidebar.component';
import { ActivitiesComponent } from './shared/activities/activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AddnurseComponent } from './dashboard/admin/crud/nurse/addnurse/addnurse.component';
import { ViewnurseComponent } from './dashboard/admin/crud/nurse/viewnurse/viewnurse.component';
import { UpdatenurseComponent } from './dashboard/admin/crud/nurse/updatenurse/updatenurse.component';
import { DeletenurseComponent } from './dashboard/admin/crud/nurse/deletenurse/deletenurse.component';
import { AdddoctorComponent } from './dashboard/admin/crud/doctor/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './dashboard/admin/crud/doctor/viewdoctor/viewdoctor.component';
import { UpdatedoctorComponent } from './dashboard/admin/crud/doctor/updatedoctor/updatedoctor.component';
import { ForgotpasswordComponent } from './registration/forgotpassword/forgotpassword.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { AppointmenthomeComponent } from './landingPage/homeAppointment/appointmenthome/appointmenthome.component';
import { BodyhomeComponent } from './landingPage/bodyhome/bodyhome.component';
import { FooterhomeComponent } from './landingPage/footerhome/footerhome.component';
import { NavbarhomeComponent } from './landingPage/navbarhome/navbarhome.component';
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
import { AddpatientdocComponent } from './dashboard/doctor/crud/patient/addpatientdoc/addpatientdoc.component';
import { UpdatepatientdocComponent } from './dashboard/doctor/crud/patient/updatepatientdoc/updatepatientdoc.component';
import { ViewpatientdocComponent } from './dashboard/doctor/crud/patient/viewpatientdoc/viewpatientdoc.component';
import { MyprofilenrsComponent } from './dashboard/nurse/profile/myprofilenrs/myprofilenrs.component';
import { EditprofilenrsComponent } from './dashboard/nurse/profile/editprofilenrs/editprofilenrs.component';
import { MyprofilepntComponent } from './dashboard/patient/ profile/myprofilepnt/myprofilepnt.component';
import { EditprofilepntComponent } from './dashboard/patient/ profile/editprofilepnt/editprofilepnt.component';
import { MyprofilerecepComponent } from './dashboard/receptionist/profile/myprofilerecep/myprofilerecep.component';
import { EditprofilerecepComponent } from './dashboard/receptionist/profile/editprofilerecep/editprofilerecep.component';
import { DoctorlistadminComponent } from './dashboard/admin/crud/doctor/doctorlistadmin/doctorlistadmin.component';
import { NurselistadminComponent } from './dashboard/admin/crud/nurse/nurselist/nurselistadmin.component';
import { ReceptionistlistadminComponent } from './dashboard/admin/crud/receptionist/receptionistlistadmin/receptionistlistadmin.component';
import { MyprofiledocComponent } from './dashboard/doctor/profile/myprofiledoc/myprofiledoc.component';
import { EditprofiledocComponent } from './dashboard/doctor/profile/editprofiledoc/editprofiledoc.component';
import { AddappointmentComponent } from './dashboard/receptionist/crud/ appointment/addappointment/addappointment.component';
import { UpdateappointmentComponent } from './dashboard/receptionist/crud/ appointment/updateappointment/updateappointment.component';
import { ViewappointmentComponent } from './dashboard/receptionist/crud/ appointment/viewappointment/viewappointment.component';
import { ListofappointmentComponent } from './dashboard/receptionist/crud/ appointment/listofappointment/listofappointment.component';
import { ChilddepartmentComponent } from './landingPage/DoctorsDepartment/childdepartment/childdepartment.component';
import { GeneraldepartmentComponent } from './landingPage/DoctorsDepartment/generaldepartment/generaldepartment.component';
import { OrthopedicsdepartmentComponent } from './landingPage/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import { NeurodepartmentComponent } from './landingPage/DoctorsDepartment/neurodepartment/neurodepartment.component';
import { CardiacdepartmentComponent } from './landingPage/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import { LogoutComponent } from './registration/logout/logout.component';
import { LastappointmentComponent } from './landingPage/lastappointment/lastappointment.component';
import { WelcomepageComponent } from './shared/welcomepage/welcomepage.component';
import { ListofpatientComponent } from './dashboard/doctor/crud/patient/listofpatient/listofpatient.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ActivitiesComponent,
    AddnurseComponent,
    ViewnurseComponent,
    UpdatenurseComponent,
    DeletenurseComponent,
    AdddoctorComponent,
    ViewdoctorComponent,
    UpdatedoctorComponent,
    ForgotpasswordComponent,
    LoginComponent,
    RegisterComponent,
    AppointmenthomeComponent,
    BodyhomeComponent,
    FooterhomeComponent,
    NavbarhomeComponent,
    SalarysettingsComponent,
    LeavetypeComponent,
    ChngpassComponent,
    AdminpayrollComponent,
    ViewdepartmentComponent,
    AdddepartmentComponent,
    UpdatedepartmentComponent,
    ViewReceptionistComponent,
    UpdateReceptionistComponent,
    AddReceptionistComponent,
    MyprofileComponent,
    EditprofileComponent,
    DepartmenthomeComponent,
    DoctorshomeComponent,
    AddpatientdocComponent,
    UpdatepatientdocComponent,
    ViewpatientdocComponent,
    MyprofilenrsComponent,
    EditprofilenrsComponent,
    MyprofilepntComponent,
    EditprofilepntComponent,
    MyprofilerecepComponent,
    EditprofilerecepComponent,
    DoctorlistadminComponent,
    NurselistadminComponent,
    ReceptionistlistadminComponent,
    MyprofiledocComponent,
    EditprofiledocComponent,
    AddappointmentComponent,
    UpdateappointmentComponent,
    ViewappointmentComponent,
    ListofappointmentComponent,
    ChilddepartmentComponent,
    GeneraldepartmentComponent,
    OrthopedicsdepartmentComponent,
    NeurodepartmentComponent,
    CardiacdepartmentComponent,
    LogoutComponent,
    LastappointmentComponent,
    WelcomepageComponent,
    ListofpatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
