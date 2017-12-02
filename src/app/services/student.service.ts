import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import './apiconstconst';

@Injectable()
export class StudentService {
  result;
  constructor( private _http : Http) {  }
  getStudents = function(){
    return this._http.get('/api/students').map(result => this.result = result.json().data);
  }

}
