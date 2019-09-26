import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MovimientoService {
    public url: string;

    constructor(
<<<<<<< HEAD
        private _http:HttpClient
=======
        public _http:HttpClient
>>>>>>> master
    ){

    }

    getDatos():Observable<any>{
<<<<<<< HEAD
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://127.0.0.1:8000/movimiento/ver', {headers:headers});   
    }

    getLastTen(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://127.0.0.1:8000/movimiento/diez', {headers:headers});
    }
}
=======
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://192.168.43.84:80/movimiento/ver');
    }
}
>>>>>>> master
