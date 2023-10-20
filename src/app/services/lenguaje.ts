import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

    constructor() {
        
     }
 
    private idiomaSubject = new BehaviorSubject<string>(''); // Valor inicial vacío
    idioma$ = this.idiomaSubject.asObservable();

  cambiarIdioma(idioma: string) {
    this.idiomaSubject.next(idioma);
  }
  }
  