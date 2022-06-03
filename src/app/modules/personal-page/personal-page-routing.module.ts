import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {ProFileService} from "./sevice/pro-file.service";
import {ProFileComponent} from './components/pro-file.component';
import {ProFileResolver} from './components/pro-file.resolver';

const routes: Routes = [{path: '', component: ProFileComponent, resolve: {userData: ProFileResolver}}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule],
  exports: [RouterModule],
  providers: [ProFileService]
})
export class PersonalPageRoutingModule {
}
