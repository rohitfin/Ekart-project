import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ApiMasterService {

  api = 'https://ekart-f1917-default-rtdb.firebaseio.com';


  constructor(
    private generalService: GeneralService
  ) { }

  addorUpdateUser(body: any): Observable<any[]> {
    var url = this.api + '/user.json';
    var updateUrl = this.api+'/user/'+body.id+'.json';
    return this.generalService.addorUpdateData(url, updateUrl, body, body.id);
  }

  getUser() {
    var url = this.api + '/user.json';
    return this.generalService.getData(url);
  }

  deleteUser(id: string){
    var url = this.api+'/user/'+id+'.json';
    return this.generalService.deleteUser(url);
  }
  deleteAllUser(id: string){
    var url = this.api+'/user.json';
    return this.generalService.deleteUser(url);
  }

}
