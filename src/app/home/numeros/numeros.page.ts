import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LenguajeService } from 'src/app/services/lenguaje';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  idioma: string=""
  audios:string[] = [];
  actve? : Howl;
  private idiomaSubscription?: Subscription;
  constructor(private lenjuage: LenguajeService) {
    this.idiomaSubscription= this.lenjuage.idioma$.subscribe(idioma =>{
      this.idioma =idioma;
      switch (idioma){
        case "español":
          this.audios=["../../assets/numeros/unoES.mp3",
          "../../assets/numeros/dosES.mp3",
          "../../assets/numeros/tresES.mp3",
          "../../assets/numeros/cuatroES.mp3",
          "../../assets/numeros/cincoES.mp3"]
          break;
        case "ingles":
          this.audios=["../../assets/numeros/unoUS.wav",
          "../../assets/numeros/dosUS.wav",
          "../../assets/numeros/tresUS.wav",
          "../../assets/numeros/cuatroUS.wav",
          "../../assets/numeros/cincoUS.wav"]
          break;
        case "portuges":
          this.audios=["../../assets/numeros/unoPO.wav",
          "../../assets/numeros/dosPO.wav",
          "../../assets/numeros/tresPO.wav",
          "../../assets/numeros/cuatroPO.wav",
          "../../assets/numeros/cincoPO.wav"]
          break;
      }
    });
   }
   play(indice: any){
    this.actve= new Howl({
      src: [this.audios[indice]]
    })
    this.actve.play();
   }

  ngOnInit() {
    
  }
  ngOnDestroy() {
    // Desuscribirse al destruir la página
    if(this.idiomaSubscription!=undefined)
    this.idiomaSubscription.unsubscribe();
  }
}
