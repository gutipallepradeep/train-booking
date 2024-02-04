// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';


// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { RouterModule,Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AdminComponent } from './admin/admin.component';
// import { BookingComponent } from './booking/booking.component';
// import { SearchComponent } from './search/search.component';
// import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HttpClientModule } from '@angular/common/http';


// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
  
// ];
// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     AdminComponent,
//     BookingComponent,
//     SearchComponent,
//     HeaderComponent,
//     LoginComponent,
//     RegisterComponent,
    

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     RouterModule.forRoot(routes),
//     FormsModule,
//     HttpClientModule,
 
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainsComponent } from './trains/trains.component';
import { Booking1Component } from './booking1/booking1.component';
import { Booking2Component } from './booking2/booking2.component';
import { Booking3Component } from './booking3/booking3.component';
import { TableComponent } from './table/table.component';
import { ShowticketsComponent } from './showtickets/showtickets.component';
import { AdminshowticketsComponent } from './adminshowtickets/adminshowtickets.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,

    SearchComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    TrainsComponent,
    Booking1Component,
    Booking2Component,
    Booking3Component,
    TableComponent,
    ShowticketsComponent,
    AdminshowticketsComponent,
    BookingSuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
