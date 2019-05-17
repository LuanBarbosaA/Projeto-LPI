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
    //console.log(this.promocao);
  }

  promocao = this.navParams.get('promocao');

  dismiss(){
    this.modalController.dismiss();
  }
  
  getColor(range){
    if(range.value > 0 && range.value < 26){ 
      range.color = "primary";
    }
    else if(range.value > 25 && range.value < 51){
      range.color = "warning";
    }
    else if(range.value > 50 && range.value < 76){
      range.color = "danger";
    }
    else if(range.value > 75 && range.value <= 100)
      range.color = "quente";
  }

}
