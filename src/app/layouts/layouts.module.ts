import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, FooterComponent, ErrorComponent } from '.';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared';
import { scrollReducer } from "../state-management/reducer/scroll.reducer";


@NgModule({
  declarations: [FooterComponent, NavbarComponent, ErrorComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [FooterComponent, NavbarComponent, ErrorComponent],
})
export class LayoutsModule { }
