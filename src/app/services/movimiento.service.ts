import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MovimientoService {
    public url: string;

    constructor(
        private _http:HttpClient
    ){

    }

    getDatos():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://127.0.0.1:8000/movimiento/ver', {headers:headers});   
    }

    getLastTen(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://127.0.0.1:8000/movimiento/diez', {headers:headers});
    }
}