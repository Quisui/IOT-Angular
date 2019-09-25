import { Component, OnInit } from '@angular/core';
import { Luz } from '../../models/luz';
import { LuzService } from '../../services/luz.service';
import {global} from '../../services/global';
@Component({
  selector: 'luz',
  templateUrl: './luz.component.html',
  styleUrls: ['./luz.component.css'],
  providers: [LuzService]

})
export class LuzComponent implements OnInit {
  public page_title: string;
  public luz: Luz;
  public status: string;
  public url;

  constructor(
    private _luzService: LuzService
  ) {
    this.url = global.url;
    this.page_title = 'Luz';
    this.luz = new Luz(1);
  }

  ngOnInit() {
    console.log('componente de luces lanzado');
  }
  onSubmit(id) {
    this._luzService.sendId(id).subscribe(
      response => {
        if (response.status == "success") {
          this.status = response.status
          console.log(response);
        } else {
          this.status = 'error'
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }


}
