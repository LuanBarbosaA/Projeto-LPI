import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  { 
    path: 'feed', 
    loadChildren: './pages/feed/feed.module#FeedPageModule' 
  },
  { path: 'modal-card', loadChildren: './pages/modal-card/modal-card.module#ModalCardPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
