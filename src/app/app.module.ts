// modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

/*angular material module*/
import { 

  MatSelectModule, 
  MatCheckboxModule, 
  MatExpansionModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatCardModule,
  MatProgressBarModule,
  MatMenuModule,
  MatDialogModule

} from '@angular/material';  
import { AppRoutingModule } from './app-routing.module';

// guards or services
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './guards/auth.Interceptor';
import { EventServiceService } from './providers/event-service.service';
import { UserService } from './providers/user-service.service';

//pipes
import { ShowErrorPipe } from './pipes/show-error.pipe';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlertComponent } from './dialogbox/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ShowErrorPipe,
    AlertComponent
  ],
  entryComponents: [AlertComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //angular material modules
    MatSelectModule, 
    MatCheckboxModule, 
    MatExpansionModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    EventServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
