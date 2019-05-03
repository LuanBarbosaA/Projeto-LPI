import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.page.html',
  styleUrls: ['./modal-card.page.scss'],
})
export class ModalCardPage implements OnInit {

  constructor(private modalController: ModalController, private navParams: NavParams,) { }

  ngOnInit() {
    console.log(this.promocao);
  }

  promocao = this.navParams.get('promocao');

  dismiss(){
    this.modalController.dismiss();
  }

}
