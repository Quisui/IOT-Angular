import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MovimientoService {
    public url: string;

    constructor(
        public _http:HttpClient
    ){

    }

    getDatos():Observable<any>{
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://192.168.43.84:80/movimiento/ver');
    }
}
