import { Component, OnInit } from '@angular/core';
import { LenguajeService } from 'src/app/services/lenguaje';
import { Subscription } from 'rxjs';
import {Howl, Howler} from 'howler';
@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {
  colores:string= ""
  idioma: string=""
  color: string[] = [];
  audios:string[] = [];
  actve? : Howl;
  private idiomaSubscription?: Subscription;
  constructor(private lenjuage: LenguajeService) {
    this.idiomaSubscription= this.lenjuage.idioma$.subscribe(idioma =>{
      this.idioma =idioma;
      switch (idioma){
        case "español":
          this.colores = "colores español";
          this.color=["rojo","verde","amarillo","azul","rosa"]
          this.audios=["../../assets/colores/rojoES.mp3",
          "../../assets/colores/verdeES.mp3",
          "../../assets/colores/amarilloES.mp3",
          "../../assets/colores/azulES.mp3",
          "../../assets/colores/rosaES.mp3"]
          break;
        case "ingles":
          this.colores = "colours";
          this.color=["red","green","yellow","blue","pink"]
          this.audios=["../../assets/colores/rojoUS.wav",
          "../../assets/colores/verdeUS.wav",
          "../../assets/colores/amarilloUS.wav",
          "../../assets/colores/azulUS.wav",
          "../../assets/colores/rosaUS.wav"]
          break;
        case "portuges":
          this.colores = "portuges";
          this.color=["vermelho", "verde", "amarelo", "azul", "rosa"]
          this.audios=["../../assets/colores/rojoPO.wav",
          "../../assets/colores/verdePO.wav",
          "../../assets/colores/amarilloPO.wav",
          "../../assets/colores/azulPO.wav",
          "../../assets/colores/rosaPO.wav"]
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
