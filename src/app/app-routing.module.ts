import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImgComponent} from '../app/img/img.component'
import { MprComponent } from './mpr/mpr.component';
import { IndxComponent } from './indx/indx.component';


const routes: Routes = [
  // {path:'', component:IndxComponent},
  {path:'img', component:ImgComponent},
  
  {path:'mpr', component:MprComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
