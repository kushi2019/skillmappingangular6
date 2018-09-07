import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './register/Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {map} from 'rxjs/operators';


const httpO = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  public name:string;
  private skillUrl = 'http://localhost:8087/SkillMappBack/api';  // URL to web api
private skilGetUrl='http://localhost:8087/SkillMappBack/api/employee/hr/getEmployee';
private skillDeleteUrl='http://localhost:8087/SkillMappBack/api/employee/hr/delete'; 
private skillLogoutUrl='http://localhost:8087/SkillMappBack/api/employee/invalidate';
constructor(private http: HttpClient) { }
  
  addEmployee(employee:Employee):Observable<Object>
  {
    return this.http.post<Employee>(this.skillUrl+'/employee/add',employee,httpO);
  }

getUser(employee: Employee): Observable<Employee> {

  return this.http.post<Employee>(this.skillUrl+'/login',employee,httpO);
}


restItem()
{
  return this.http.get<any[]>(this.skillUrl+'/employee/hr').pipe(map(data=>data));
}
deleteEmployee(empId:number):Observable<Object>
{const url1=`${this.skillDeleteUrl}/${empId}`;
 return this.http.delete<Employee>(url1,httpO);  
}

setCookService(name:string){
return this.name;
}

getEmployee(name:string){
const url=`${this.skilGetUrl}/${name}`;
  return this.http.put<Employee>(url,httpO);
}
updateEmployee(employee:Employee):Observable<Object>{

return this.http.post<Employee>(this.skillUrl+'/employee/update',employee,httpO);
}
invalidate(name:string){
  const url=`${this.skillLogoutUrl}/${name}`;
 
  return this.http.put<Employee>(url,httpO);
}
}
