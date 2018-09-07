import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service'
import { Employee } from '../register/Employee';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
employee:any={}
 constructor(public cookieService: CookieService,private location: Location,private registerService:RegistrationService,  private router: Router
  ) { }
  cookieValue1 = 'UNKNOWN';
  cookieValue2 = 'UNKNOWN';
  cookieValue3 = 'UNKNOWN';
  cookieValue4 = 'UNKNOWN';
  cookieValue5 = 'UNKNOWN';
  cookieValue6 = 'UNKNOWN';
  cookieValue7 = 'UNKNOWN';
  cookieValue8 = 'UNKNOWN';
  cookieValue9 = 'UNKNOWN';
  cookieValue10 = 'UNKNOWN';
  cookieValue11 = 'UNKNOWN'
 cookName:string;
  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
 
loginUser(employee:Employee){
 
  this.registerService.getUser(this.employee).subscribe(

    data => {
 
      this.employee=data;
     
      this.cookieService.set('firstName',this.employee.firstName);
      this.cookName=this.cookieService.get('firstName');
      console.log( "in log in-->"+this.employee.firstName);
      this.cookieService.set('empId',this.employee.empId);
      this.cookieService.set('lastName',this.employee.lastName);
      this.cookieService.set('emailId',this.employee.emailId);
      this.cookieService.set('contactNo',this.employee.contactNo);
      this.cookieService.set('gender',this.employee.gender);
      this.cookieService.set('role',this.employee.role);
      this.cookieService.set('password',this.employee.password);
      this.cookieService.set('certification',this.employee.certification);
      this.cookieService.set('skill',this.employee.skill);
      this.cookieService.set('proLocation',this.employee.proLocation);
      this.cookieService.set('experience',this.employee.experience);
      this.cookieService.set('noOfStudentPlaced',this.employee.noOfStudentPlaced);
      this.cookieService.set('noOfStudentTaught',this.employee.noOfStudentTaught);
      alert('log in sucessfully');
      this.router.navigateByUrl('/home');
      location.reload();
  },
  error => {
         alert("invalid user id and password");
      this.router.navigateByUrl('login');
  });
}
loginCancel(){
  this.router.navigateByUrl('home');
}

}
