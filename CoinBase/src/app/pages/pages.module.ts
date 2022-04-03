import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CompModule } from '../comp/comp.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    CompModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactsComponent
  ]
})
export class PagesModule { }
