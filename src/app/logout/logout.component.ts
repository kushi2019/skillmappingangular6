import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service'
import { Employee } from '../register/Employee';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public cookieService: CookieService,private location: Location,private registerService:RegistrationService,  private router: Router) { }
  employee:any={}
  cookieValue='unknown';
  ngOnInit() {
    this.cookieValue = this.cookieService.get('firstName');
    
    this.log1();
    
  }
  log1(){
   
    
    this.registerService.invalidate(this.cookieValue).subscribe(
      data=>{

    
    alert('log out');
    this.cookieService.deleteAll();
      this.router.navigateByUrl('home');
 location.reload();
      },
      error=>
      {
        alert("kindly log in");
        this.router.navigateByUrl('home');
      });
  }

}
