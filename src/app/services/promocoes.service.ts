import { Injectable } from '@angular/core';
import { Promocao } from '../models/promocao.interface';

@Injectable({
  providedIn: 'root'
})
export class PromocoesService {

  constructor() { 
  }

  promocoes = [
    {
      id: 0,
      nome_promocao: 'Sapato e blusa',
      img: '../../../assets/img/sapatos_blusa.jpeg',
      texto: 'Sapato e camisa social de luxo, só hoje!!',
      valor: 999.99,
      temperatura: 75,
      favorito: false
    },
    {
      id: 1,
      nome_promocao: 'Calculadora',
      img: '../../../assets/img/calculadora.jpeg',
      texto: 'Calculadora mágica que calcula números, em promoção só hoje!!',
      valor: 99.99,
      temperatura: 25,
      favorito: false
    }
  ]

  get(id=null){
    if(id==null){
      return this.promocoes;
    }else if(id!=null){
      return this.promocoes[id];
    }
  }

  alterar_favorito(id){
    if(this.promocoes[id].favorito==false){
      this.promocoes[id].favorito = true;
      console.log(this.promocoes[id].favorito);
    }else{
      this.promocoes[id].favorito = false;
      console.log(this.promocoes[id].favorito);
    }
  }
}
