import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavoritosPage } from './favoritos.page';
import { ModalCardPage } from './../modal-card/modal-card.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //NovoModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritosPage],
  entryComponents: []
})
export class FavoritosPageModule {}
