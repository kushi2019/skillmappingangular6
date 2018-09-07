import { Component, OnInit, Input } from '@angular/core';
import {RegistrationService} from '../registration.service'
import { Employee } from '../register/Employee';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {
employee:any={}
emp:any={}
private prices = [];
private ticker=[];

constructor(private registerService:RegistrationService) { }
title='app';
  ngOnInit() {
  }
getRestItems():void
{console.log("inside getall");
  this.registerService.restItem().subscribe(data=>{this.employee=data;
                                                   console.log(this.employee)})

}

delete(employee:Employee):void{
  console.log("inside delete")
  this.employee=employee;
  this.registerService.deleteEmployee(this.emp).subscribe(data=>(console.log(data,"delete")))};
   }
   




   

