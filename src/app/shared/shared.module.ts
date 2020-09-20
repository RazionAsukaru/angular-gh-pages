import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    RouterModule,
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
