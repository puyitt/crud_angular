import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this._http.post('https://angular-student-management-default-rtdb.firebaseio.com/data.json',data);
  }

  updateEmployee(id:number,data:any):Observable<any>{
    return this._http.put('https://angular-student-management-default-rtdb.firebaseio.com/data/'+id+'.json',data);
  }

  getEmployee():Observable<any>{
    return this._http.get('https://angular-student-management-default-rtdb.firebaseio.com/data.json');
  }

  deleteEmployee(id:number):Observable<any>{
    return this._http.delete('https://angular-student-management-default-rtdb.firebaseio.com/data/'+id+'.json');
  }
}
