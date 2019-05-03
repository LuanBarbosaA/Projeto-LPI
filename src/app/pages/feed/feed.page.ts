import { ModalCardPage } from './../modal-card/modal-card.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Promocao } from './../../models/promocao.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(private modalController: ModalController) {
    this.promocoes = [
      {
        id: 0,
        nome_promocao: 'Sapato e blusa',
        img: '../../../assets/img/sapatos_blusa.jpeg',
        texto: 'Sapato e camisa social de luxo, só hoje!!',
        valor: 999.99,
        temperatura: 81
      },
      {
        id: 1,
        nome_promocao: 'Calculadora',
        img: '../../../assets/img/calculadora.jpeg',
        texto: 'Calculadora mágica que calcula números, em promoção só hoje!!',
        valor: 99.99,
        temperatura: 41
      }
    ]
  }

  ngOnInit() {
  }

  promocoes: any;

  async cardModal(id){
    console.log(id);
    const modal = await this.modalController.create({
      component: ModalCardPage, componentProps: {
        promocao: this.promocoes[id]
      }
    });
    await modal.present();
  }

}