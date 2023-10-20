import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LenguajeService } from 'src/app/services/lenguaje';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  idioma: string=""
  audios:string[] = [];
  actve? : Howl;
  private idiomaSubscription?: Subscription;
  constructor(private lenjuage: LenguajeService) {
    this.idiomaSubscription= this.lenjuage.idioma$.subscribe(idioma =>{
      this.idioma =idioma;
      switch (idioma){
        case "español":
          this.audios=["../../assets/animales/gatoES.mp3",
          "../../assets/animales/perroES.mp3",
          "../../assets/animales/conejoES.mp3",
          "../../assets/animales/loroES.mp3",
          "../../assets/animales/carpinchoES.mp3"]
          break;
        case "ingles":
          this.audios=["../../assets/animales/gatoUS.wav",
          "../../assets/animales/perroUS.wav",
          "../../assets/animales/conejoUS.wav",
          "../../assets/animales/loroUS.wav",
          "../../assets/animales/carpinchoUS.wav"]
          break;
        case "portuges":
          this.audios=["../../assets/animales/gatoPO.wav",
          "../../assets/animales/perroPO.wav",
          "../../assets/animales/conejoPO.wav",
          "../../assets/animales/loroPO.wav",
          "../../assets/animales/carpinchoPO.wav"]
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
