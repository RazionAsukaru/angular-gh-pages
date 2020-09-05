import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, ErrorComponent],
  imports: [
    CommonModule
  ], 
  exports: [FooterComponent, NavbarComponent, ErrorComponent],
})
export class LayoutsModule { }
