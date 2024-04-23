import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerpageComponent } from './component/scannerpage/scannerpage.component';
import { ReactiveformComponent } from './component/reactiveform/reactiveform.component';
import { FunctionComponent } from './component/function/function.component';
import { TemplatedrivenComponent } from './component/templatedriven/templatedriven.component';
import { CrudComponent } from './component/crud/crud.component';
import { CrudcouchstructureComponent } from './component/crudcouchstructure/crudcouchstructure.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { Test1Component } from './app2/test1/test1.component';
import { Login1Component } from './component/login1/login1.component';
import { NgtemplatecontainerComponent } from './component/ngtemplatecontainer/ngtemplatecontainer.component';
import { ParentinputComponent } from './component/parentinput/parentinput.component';
import { ChildinputComponent } from './component/childinput/childinput.component';
import { UnknowncompoentComponent } from './component/unknowncompoent/unknowncompoent.component';
import { AuthguardService } from './service/authguard.service';
import { LogincrducouchstructureComponent } from './component/logincrducouchstructure/logincrducouchstructure.component';
import { PracticeComponent } from './component/practice/practice.component';
import { RouterComponent } from './component/router/router.component';

const routes: Routes = [
  {path:'',redirectTo:'/router', pathMatch:'full'},

  {path:'crudcouch',component:CrudcouchstructureComponent},
  {path:'logincrud',component:LogincrducouchstructureComponent},
  {path:'templatedriven',component:TemplatedrivenComponent},
  {path:'function',component:FunctionComponent},
{path:'reactive',component:ReactiveformComponent},
{path:'scanner',component:ScannerpageComponent},
{path:'parent',component:ParentComponent},
{path:'child',component:ChildComponent},
{path:'test1',component:Test1Component},
{path:'test/:id/:name',component:Test1Component},
{path:'login',component:Login1Component},
{path:'ngtemplatecontainer',component:NgtemplatecontainerComponent,canActivate:[AuthguardService]},
{path:'parentinput',component:ParentinputComponent},
{path:'childinput',component:ChildinputComponent},
{path:"router",component:RouterComponent},
{path:"router/:id/:name",component:RouterComponent},
// (**) defined to last 
{path:"**",component:UnknowncompoentComponent},

// {path:"",component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
