import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IconsComponent } from './components/icons/icons.component';
import { BookingComponent } from './components/booking/booking.component';
import { TicketConfirmComponent } from './components/ticket-confirm/ticket-confirm.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'booking', component:BookingComponent },
  { path: 'home',component:HomeComponent},
  { path: 'ticket-confirm', component:TicketConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
