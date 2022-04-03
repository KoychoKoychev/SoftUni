import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

@NgModule({
  declarations: [
    HeroComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroComponent,
    BlogCardComponent
  ]
})
export class CompModule { }
