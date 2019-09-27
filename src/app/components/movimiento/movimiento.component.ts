import { Component, OnInit, Input} from '@angular/core';
import {Movimiento} from '../../models/movimiento';
import { MovimientoService } from '../../services/movimiento.service';

@Component({
  selector: 'movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
  providers: [MovimientoService]
})
export class MovimientoComponent implements OnInit {

  public page_title: string;
  public movimiento:Movimiento;
  public datos;
  public datos10;


  constructor(
    private _movimientoService: MovimientoService
  ) {
    this.page_title = 'movimiento';
    this.movimiento = new Movimiento(1,'','','');
   }

  ngOnInit() {
    console.log('componente de movimiento lanzado');
    this.getDatos();    
  }
  

  getDatos(){
    this._movimientoService.getDatos().subscribe(
      response => {
          if (response.status == 'success'){
            this.datos = response.movimientos;
            console.log(this.datos);
          }
      },

      error => {
        console.log(error);
      }
    );
  }

  getLastTen(){
    this._movimientoService.getLastTen().subscribe(
      response => {
        if (response.status == 'success'){
          this.datos = response.movimiento;
          console.log(this.datos);
        }
      },

      error => {
        console.log(error);      
      }
    );
  }

  getRangoFechas(from, to){
    this._movimientoService.getRangoFechas(from, to).subscribe(
      response => {
        if (response.status == 'success'){
          this.datos = response.Movimientos;
          console.log(this.datos);
        }
      },

      error => {
        console.log(error);      
      }
    );
  }
  

}
