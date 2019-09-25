import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Luz} from '../models/luz';
import {global} from './global';

@Injectable()
export class LuzService{
  public url: string;

  constructor(
    public _http:HttpClient
  ){
    this.url = global.url;
  }
  test(){
    return "Hola desde servicio";
  }
  sendId(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'luces/'+id, {headers:headers});
  }

}
