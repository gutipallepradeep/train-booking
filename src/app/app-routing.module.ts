import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainsComponent } from './trains/trains.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'home',component:HomeComponent},
 
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  // {
  //   path:'home',
  //   component: HomeComponent
  // },
  {
    path:'search',
    component:SearchComponent
   },
   {
    path:'bookings',
    component:BookingComponent
   },
   {
    path:'admin',
    component:AdminComponent
   },
   {
    path:'trains',
    component:TrainsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
