import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { CitaComponent } from './pages/cita/cita.component';


const routes: Routes = [
    
  {
    path: "",
    component: MainLayoutsComponent,
    children: [
      { path: "cita",component: CitaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
