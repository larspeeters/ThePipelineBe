import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PvsListComponent } from './pvs/pvs-list.component';
import { PvsDetailsComponent } from './pvs/pvs-details.component';
import { PartnersComponent } from './partners/partners.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pvs', component: PvsListComponent },
  { path: 'pvs/:name', component: PvsDetailsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
