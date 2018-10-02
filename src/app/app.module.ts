import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule}from'@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule}from '@angular/forms';


import { AppComponent } from './app.component';
//import{BehaviorSubject} from 'rxjs/BehaviourSubject';
import {BehaviorSubject,Subject} from 'rxjs';

import {MyService} from './my.service';
import {ModelformComponent} from './modelform/modelform.component';
import{sortstring} from './app.sort';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
//import { FormtestComponent } from './formtest/formtest.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateemployeeComponent } from './employee/createemployee.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DataparentComponent } from './dataparent/dataparent.component';
import { DatachildComponent } from './datachild/datachild.component';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { SelectedValidatorDirective } from './selected-validator.directive';
import { ComparepasswordDirective } from './comparepassword.directive';
import{EmployeeServiceService} from './employee/employee-service.service';
//import { EmployeedisplayComponent } from './employeedisplay.component';
import { DisplayemployeeComponent } from './employee/displayemployee.component';
import{CandeactiveServiceService} from'./employee/candeactive-service.service';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import{ResoveServiceService} from   './employee/resove-service.service';
import { SearchPipe } from './search.pipe';


const approute:Routes=[
 {path: 'list', component:ListEmployeeComponent,
  resolve:{'emplist':ResoveServiceService},

  

},
 {path: 'employee/:id', component:EmployeeDetailComponent},
  {path: 'parent', component:DataparentComponent},
  {path: 'create', 
  component:CreateemployeeComponent,
  canDeactivate:[CandeactiveServiceService]},
  {path: 'product', component:ProductComponent,
    children:[
      {path:'detail/:id',component:ProductDetailComponent},

    ]},
  {path: '',redirectTo:'/list',pathMatch:'full'},
  {path:'lazy',loadChildren:'./lazy.module#LazyModule'}

];
  
@NgModule({
  declarations: [
    sortstring,
    AppComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    // FormtestComponent,
    TestcomponentComponent,
    ListEmployeeComponent,
    CreateemployeeComponent,
    ProductComponent,
    ProductDetailComponent,
    DataparentComponent,
    DatachildComponent,
    SelectedValidatorDirective,
    ComparepasswordDirective,
    //EmployeedisplayComponent,
    DisplayemployeeComponent,
    EmployeeDetailComponent,
    SearchPipe,    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(approute,{enableTracing:true})
  ],
  providers: [MyService,CandeactiveServiceService,ResoveServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
