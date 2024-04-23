import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerpageComponent } from './component/scannerpage/scannerpage.component';
import { BiometricAuthServiceService } from './service/biometric-auth-service.service';
import { ReactiveformComponent } from './component/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { ReactiveserviceService } from './service/reactiveservice.service';
import {HttpClientModule} from '@angular/common/http';
import { TemplatedrivenComponent } from './component/templatedriven/templatedriven.component';
import { FunctionComponent } from './component/function/function.component';
import { CrudComponent } from './component/crud/crud.component';
import { CrudcouchstructureComponent } from './component/crudcouchstructure/crudcouchstructure.component';
import { LogincrducouchstructureComponent } from './component/logincrducouchstructure/logincrducouchstructure.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { App2Module } from './app2/app2.module';
import { Login1Component } from './component/login1/login1.component';
import { NgtemplatecontainerComponent } from './component/ngtemplatecontainer/ngtemplatecontainer.component';
import { ChildinputComponent } from './component/childinput/childinput.component';
import { ParentinputComponent } from './component/parentinput/parentinput.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnknowncompoentComponent } from './component/unknowncompoent/unknowncompoent.component';
import { RouterComponent } from './component/router/router.component';

// import { BiometricAuthServiceService } from './service/biometric-auth-service.service';
// import { BiometricAuthService } from '.service/biometric-auth-service.service'; 

@NgModule({
  declarations: [
    AppComponent,
    ScannerpageComponent,
    ReactiveformComponent,
    TemplatedrivenComponent,
    FunctionComponent,
    CrudComponent,
    CrudcouchstructureComponent,
    LogincrducouchstructureComponent,
    ParentComponent,
    ChildComponent,
    Login1Component,
    NgtemplatecontainerComponent,
    ChildinputComponent,
    ParentinputComponent,
    UnknowncompoentComponent,
    RouterComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // ReactiveserviceService,
    HttpClientModule,
    App2Module,
    BrowserAnimationsModule
    
    // BiometricAuthServiceService
  ],
  providers: [],
  // providers: [BiometricAuthService], 
  // providers: [    BiometricAuthServiceService,
  //   {
  //     provide: 'PublicKeyCredentialCreationOptions',
  //     useFactory: () => ({
  //       // Define your PublicKeyCredentialCreationOptions object here
  //       rp: {
  //         name: 'Your Website Name',
  //         id: 'localhost' // Update this with your actual domain
  //       },
  //       // Other properties...
  //     })
  //   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
