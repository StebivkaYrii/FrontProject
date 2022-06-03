import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalPageRoutingModule} from './personal-page-routing.module';
import {ProFileComponent} from './components/pro-file.component';


@NgModule({
  declarations: [
    ProFileComponent
  ],
  imports: [
    CommonModule,
    PersonalPageRoutingModule
  ]
})
export class PersonalPageModule {
}
