import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../../models/movimiento';
import { MovimientoService } from '../../services/movimiento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovimientoService]
})
export class HomeComponent implements OnInit {
public page_title: string;
public movimiento: Movimiento;
public datos;

  constructor(
    private _movimientoService: MovimientoService
  ) {
    this.page_title= 'Inicio';
   }

  ngOnInit() {
    this.getDatos();
  }

  getDatos(){
    this._movimientoService.getDatos().subscribe(
      response => {
        if (response.status == 'success'){
          this.datos = response.datos;
          console.log(this.datos);
        }
      },

      error => {
        console.log(error);
      }
    );
  }

}
