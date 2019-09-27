import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';
@Injectable()
export class MovimientoService {
    public url: string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    getDatos():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+'movimiento/ver', {headers:headers});   
    }

    getLastTen(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+'movimiento/diez', {headers:headers});
    }
    
    getRangoFechas(from, to): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+'movimiento/rango/'+from+'/'+to, {headers:headers});
    }
}