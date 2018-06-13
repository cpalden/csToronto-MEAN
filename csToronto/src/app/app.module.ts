import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecordComponent } from './record/record.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { GeocodingService } from './geocoding.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportComponent,
    LoginComponent,
    RegisterComponent,
    RecordComponent,
    CheckboxGroupComponent,
    CheckboxComponent,
    PageNotFoundComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuNre_l4nGqY4gP9SeQD-PyGbfuBzB168'})],

  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    GeocodingService
    ],

  bootstrap: [AppComponent]
})

export class AppModule { }
