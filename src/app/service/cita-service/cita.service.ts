import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Cita } from 'src/app/dtos/cita';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private urlEndPoint: string = 'http://localhost:8080/cita';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private _http: HttpClient) {}



  getCitas(): Observable<Cita[]>{    
    return this._http.get(this.urlEndPoint).pipe(
      map( response => response as Cita[]),
      catchError(error => {
        console.error(`CitaService::getCitas error:  "${error.message}"`);        
        return throwError(error);
      }));
      }

}
