<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
import {Movimiento} from '../../models/movimiento';
=======
import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../../models/movimiento';
>>>>>>> master
import { MovimientoService } from '../../services/movimiento.service';

@Component({
  selector: 'movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
  providers: [MovimientoService]
})
export class MovimientoComponent implements OnInit {
  public page_title: string;
<<<<<<< HEAD
  public movimiento:Movimiento;
  public datos;
  public datos10;
=======
  public movimiento: Movimiento;
  public datos;
>>>>>>> master


  constructor(
    private _movimientoService: MovimientoService
  ) {
    this.page_title = 'movimiento';
<<<<<<< HEAD
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
          this.datos10 = response.movimiento;
          console.log(this.datos10);
        }
      },
=======
    this.movimiento = new Movimiento(1, '', '', '');
  }

  ngOnInit() {
    this.getDatos();
  }
  onSubmit(form) {
>>>>>>> master

      error => {
        console.log(error);      
      }
    );
  }
  

  getDatos() {
    this._movimientoService.getDatos().subscribe(
      response => {
        if (response.status == 'success') {
          this.datos = response.datos;
          console.log(this.datos);
        }
      },

      error => {
        console.log(<any>error);
      }
    )
  }


}
