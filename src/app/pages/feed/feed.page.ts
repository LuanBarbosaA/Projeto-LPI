import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Promocao } from './../../models/promocao.interface';
import { element } from '@angular/core/src/render3';
import {ViewChild, ElementRef, Renderer2} from '@angular/core';
import { ModalCardPage } from './../modal-card/modal-card.page';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(private modalController: ModalController,private renderer: Renderer2) {
    this.promocoes = [
      {
        id: 0,
        nome_promocao: 'Sapato e blusa',
        img: '../../../assets/img/sapatos_blusa.jpeg',
        texto: 'Sapato e camisa social de luxo, só hoje!!',
        valor: 999.99,
        temperatura: 75
      },
      {
        id: 1,
        nome_promocao: 'Calculadora',
        img: '../../../assets/img/calculadora.jpeg',
        texto: 'Calculadora mágica que calcula números, em promoção só hoje!!',
        valor: 99.99,
        temperatura: 25
      }
    ]
  }

  ngOnInit() {
    // this.renderer.setStyle(this.flame.nativeElement, 'color', 'primary');
    // this.teste = document.querySelector("#teste").style.color = "primary";
    // let louco = document.getElementById('teste');
    // louco.style.color = 'primary';
  }
  // @ViewChild('flame') flame;
  promocoes: any;
  number: number;
  teste: any;

  async cardModal(id){
    //console.log(id);
    const modal = await this.modalController.create({
      component: ModalCardPage, componentProps: {
        promocao: this.promocoes[id]
      }
    });
    await modal.present();
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

  getColor(icon, id){
    if(this.promocoes[id].temperatura > 0 && this.promocoes[id].temperatura < 26){
      // return '#3880ff'; //primary
      icon.color = "primary";
    }
    else if(this.promocoes[id].temperatura > 25 && this.promocoes[id].temperatura < 51){
      // return '#ffce00'; //warning
      icon.color = "warning";
    }
    else if(this.promocoes[id].temperatura > 50 && this.promocoes[id].temperatura < 76){
      // return '#f04141'; //danger
      icon.color = "danger";
    }
    else if(this.promocoes[id].temperatura > 75 && this.promocoes[id].temperatura <= 100)
      // return '#b71c1c'; //quente
      icon.color = "quente";
  }

}