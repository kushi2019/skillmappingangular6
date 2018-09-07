import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee:any={};
 
 
  constructor(private route: ActivatedRoute,
    
    private location: Location,
  private registrationService: RegistrationService,private router:Router) { 
    
  };

  ngOnInit() {
    
  }
 
 
onSubmit():void{
  
  this.registrationService.addEmployee(this.employee).subscribe(
    data=>{this.router.navigateByUrl('home');
  alert('Data has been entered'); 
 
    },
    error=>
    {
      alert('Kindly enter data');

    });
  }

  loginCancel(){
    this.router.navigateByUrl('home');
  }
}
