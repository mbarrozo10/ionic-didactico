import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { LenguajeService } from '../services/lenguaje';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  idioma=""
  tema="colores"
  constructor(private authService: AuthService, private router: Router, private firestore : Firestore
    ,private navcontrol : NavController,
    private lenguajeService : LenguajeService) {
    const placeref= collection(this.firestore, 'usuarios');
     const retorno= collectionData(placeref);
     retorno.subscribe(data =>
     {
      
      // const retorno= data.find(item => item['correo']===this.authService.retornarUsuario());
      for (const x of data){
        if(x['correo']=== this.authService.retornarUsuario() ){
          this.usuario= x['usuario'];
        }
      }
     })
   }
   
   usuario?:  any;
  ngOnInit() {
    this.cambiarIdioma("español");
    this.idioma= "../../assets/espana.png"
    this.tema= "palette";
  }
  
  async logout(){
   await this.authService.logout();
   this.router.navigateByUrl('/', {replaceUrl: true});
  }
  cambiarIdioma(idioma: string ){
    // HomePage.idioma=idioma;
    this.lenguajeService.cambiarIdioma(idioma);
    switch(idioma){
      case 'español':
        this.idioma= "../../assets/espana.png"
        break;
      case 'ingles':
        this.idioma= "../../assets/estados-unidos.png"
        break;
      case 'portuges':
        this.idioma= "../../assets/portugal.png"
        break;
    }
    
  }

  cambiarPestana(ruta : string){
    this.navcontrol.navigateForward("home/"+ruta);
    switch(ruta){
      case 'colores':
        this.tema= "palette";
        break;
      case 'numeros':
        this.tema= "looks_two";
        break;
      case 'animales':
        this.tema= "pets"
        break;

    }
  }

}
