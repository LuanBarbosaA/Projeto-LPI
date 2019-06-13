import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ViewChild, ElementRef, Renderer2} from '@angular/core';
import { ModalCardPage } from './../modal-card/modal-card.page';
import { PromocoesService } from './../../services/promocoes.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(
    private modalController: ModalController, 
    private elRef: ElementRef,
    private promocoesService: PromocoesService
  ) { }

  ngOnInit() {
    this.getPromocoes();
  }

  cor: String;
  promocoes: any;
  number: number;

  /*async cardModal(id){
    //console.log(id);
    const modal = await this.modalController.create({
      component: ModalCardPage, componentProps: {
        // promocao: this.promocoes[id]
        id: id
      }
    });
    await modal.present();
  }*/

  getPromocoes(){
    this.promocoes = this.promocoesService.get();
  }

  mudarCorRange(ionRange){
    if(ionRange.value > 0 && ionRange.value  < 26){
      ionRange.color = "primary";
    }
    else if(ionRange.value > 25 && ionRange.value < 51){
      ionRange.color = "warning";
    }
    else if(ionRange.value > 50 && ionRange.value < 76){
      ionRange.color = "danger";
    }
    else if(ionRange.value > 75 && ionRange.value <= 100){
      ionRange.color = "quente";
    }
  }

  iconColor(id){
    if(this.promocoes[id].temperatura > 0 && this.promocoes[id].temperatura < 26){
      return '#3880ff'; //primary
      //return "primary";
    }
    else if(this.promocoes[id].temperatura > 25 && this.promocoes[id].temperatura < 51){
       return '#ffce00'; //warning
      //return "warning";
    }
    else if(this.promocoes[id].temperatura > 50 && this.promocoes[id].temperatura < 76){
      return '#f04141'; //danger
      //return "danger";
    }
    else if(this.promocoes[id].temperatura > 75 && this.promocoes[id].temperatura <= 100){
      return '#b71c1c'; //quente
      //return "quente";
    }   
  }
}
