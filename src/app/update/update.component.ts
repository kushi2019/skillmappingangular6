import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Employee } from '../register/Employee';
import { Router } from '@angular/router';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee:Employee;
  employee1:Employee;
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
  cookieValue11 = 'UNKNOWN';
  
  constructor(private router:Router,private cookieService: CookieService,private registrationService: RegistrationService) { }

  ngOnInit() {
    this.cookieValue1 = this.cookieService.get('firstName');
    this.cookieValue2=this.cookieService.get('lastName');
    this.cookieValue3=this.cookieService.get('emailId');
    this.cookieValue4=this.cookieService.get('contactNo');
    this.cookieValue5=this.cookieService.get('gender');
    this.cookieValue6=this.cookieService.get('password');
    this.cookieValue7=this.cookieService.get('certification');
    this.cookieValue8=this.cookieService.get('proLocation');
    this.cookieValue9=this.cookieService.get('experience');
    this.cookieValue10=this.cookieService.get('noOfStudentPlaced');
    this.cookieValue11=this.cookieService.get('noOfStudentTaught');
  
   
  }

  getEmployee(){
    console.log('getemplyee called');
    this.registrationService.getEmployee(this.cookieValue1).subscribe(data=>
      {this.employee=data;
        alert("employee Retrieved");
        
      },
      error=>{
         alert('Employee does not exist ')
        this.router.navigateByUrl('update');
      }
    );
   
   
  }  
  updateEmployee(employee:Employee){
    this.registrationService.updateEmployee(this.employee).subscribe(
      data=>{
       alert("Employee updated");
       this.router.navigateByUrl('home');
      },
    error=>
      {
        alert('There is some error ')
        this.router.navigateByUrl('home');

      }
    );

  }
  loginCancel(){
    this.router.navigateByUrl('home');
  }

}
