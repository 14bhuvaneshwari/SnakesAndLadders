import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'createroom',
    loadChildren: () => import('./createroom/createroom.module').then( m => m.CreateroomPageModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./board/board.module').then( m => m.BoardPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }