import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PromocoesService } from './../../services/promocoes.service';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.page.html',
  styleUrls: ['./modal-card.page.scss'],
})
export class ModalCardPage implements OnInit {

  constructor(
    private modalController: ModalController, 
    private navParams: NavParams, 
    private elRef: ElementRef,
    private promocoesService: PromocoesService) {}

  ngOnInit() {
    //console.log(this.promocao);
    this.getPromocoes();
    this.colorRange();
  }

  range: any;
  id = this.navParams.get('id');
  promocao: any;

  dismiss(){
    this.modalController.dismiss();
  }
  
  getPromocoes(){
    this.promocao = this.promocoesService.get(this.id);
  }

  favorito(id){
    this.promocoesService.alterar_favorito(id);
  }

  colorRange(){
    var range = this.elRef.nativeElement.querySelector('ion-range');
    if(this.promocao.temperatura > 0 && this.promocao.temperatura < 26){ 
      range.color = "primary";
    }
    else if(this.promocao.temperatura > 25 && this.promocao.temperatura < 51){
      range.color = "warning";
    }
    else if(this.promocao.temperatura > 50 && this.promocao.temperatura < 76){
      range.color = "danger";
    }
    else if(this.promocao.temperatura > 75 && this.promocao.temperatura <= 100)
      range.color = "quente";
  }

  changeColor(){
    var range = this.elRef.nativeElement.querySelector('ion-range');
    if(range.value > 0 && range.value < 26){
      range.color = "primary";
    }else if(range.value > 25 && range.value < 51){
      range.color = "warning";
    }else if(range.value > 50 && range.value < 76){
      range.color = "danger";
    }else if(range.value > 75 && range.value <= 100){
      range.color = "quente";
    }
  }

}
