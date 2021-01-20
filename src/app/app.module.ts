import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialsComponent } from './socials/socials.component';
import { HomeComponent } from './home/home.component';

// Bootstrap Modules
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { PvsListComponent } from './pvs/pvs-list.component';

import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './stats/stats.component';
import { PvsDetailsComponent } from './pvs/pvs-details.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialsComponent,
    HomeComponent,
    AboutComponent,
    PartnersComponent,
    PvsListComponent,
    StatsComponent,
    PvsDetailsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
