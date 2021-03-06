import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { Promocao } from './../../models/promocao.interface';
//import { element } from '@angular/core/src/render3';
import {ViewChild, ElementRef, Renderer2} from '@angular/core';
import { ModalCardPage } from './../modal-card/modal-card.page';
//import { flatten } from '@angular/router/src/utils/collection';
import { PromocoesService } from './../../services/promocoes.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [PromocoesService]
})
export class FeedPage implements OnInit {

  constructor(
    private modalController: ModalController, 
    private elRef: ElementRef,
    private promocoesService: PromocoesService
    ) {
  }

  ngOnInit() {
    this.getPromocoes();
  }
  
  cor: String;
  promocoes: any;
  number: number;
  teste: any;

  async cardModal(id){
    //console.log(id);
    const modal = await this.modalController.create({
      component: ModalCardPage, componentProps: {
        // promocao: this.promocoes[id]
        id: id
      }
    });
    await modal.present();
  }
  
  getPromocoes(){
    this.promocoes = this.promocoesService.get();
  }

  favorito(id){
    this.promocoesService.alterar_favorito(id);
  }
  // changeColor(range, id){
  //   //var range = this.elRef.nativeElement.querySelector("#"+id);
  //   //console.log(range);
  //   if(this.promocoes[id].temperatura > 0 && this.promocoes[id].temperatura < 26){
  //     range.color = "primary";
  //     //return '#3880ff'; //primary
  //     //return 'primary';
  //     //this.cor = 'primary';
  //   }
  //   else if(this.promocoes[id].temperatura > 25 && this.promocoes[id].temperatura < 51){
  //     range.color = "danger";
  //     //return '#ffce00'; //warning
  //     //return 'warning';
  //     //this.cor = 'warning';
  //   }
  //   else if(this.promocoes[id].temperatura > 50 && this.promocoes[id].temperatura < 76){
  //     range.color = "warning";
  //     //return '#f04141'; //danger
  //     //return 'danger';
  //     //this.cor = 'danger';
  //   }
  //   else if(this.promocoes[id].temperatura > 75 && this.promocoes[id].temperatura <= 100){
  //     range.color = "quente";
  //     //return '#b71c1c'; //quente
  //     //return 'quente';
  //     //this.cor = 'quente';
  //   }   
  // }

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