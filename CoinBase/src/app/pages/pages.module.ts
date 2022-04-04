import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CompModule } from '../comp/comp.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    CompModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    RegisterComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
