import { Component, OnInit } from '@angular/core';
import {movimiento} from '../../models/movimiento';

@Component({
  selector: 'movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {
  public page_title: string;
  public Movimiento:movimiento;
  constructor() {
    this.page_title = 'movimiento';
    this.Movimiento = new movimiento(1,'','','');

   }

  ngOnInit() {
  }
  onSubmit(form){

  }

}
