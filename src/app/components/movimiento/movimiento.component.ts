import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../../models/movimiento';
import { MovimientoService } from '../../services/movimiento.service';

@Component({
  selector: 'movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
  providers: [MovimientoService]
})
export class MovimientoComponent implements OnInit {
  public page_title: string;
  public movimiento: Movimiento;
  public datos;


  constructor(
    private _movimientoService: MovimientoService
  ) {
    this.page_title = 'movimiento';
    this.movimiento = new Movimiento(1, '', '', '');
  }

  ngOnInit() {
    this.getDatos();
  }
  onSubmit(form) {

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
