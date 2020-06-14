import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/cita-service/cita.service';
import { Cita } from 'src/app/dtos/cita';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  citaList: Cita[];
  constructor(private _citaService: CitaService) { }

  ngOnInit(): void {
   this.getCitas();
  }

  getCitas(): void{
    this._citaService.getCitas().subscribe(      
      response => {
        this.citaList = response;
        console.log(response);
      })
  }

}
