import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { MessageBoardOutComponent } from './pages/message-board-out/message-board-out.component';
export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },

  {
    path: 'login',
    component: LoginComponent,

    },
    {
      path: 'message',
      component: MessageBoardOutComponent,
  
      },
  { path: '', 
    redirectTo: 'pages', 
    pathMatch: 'full' 
  },
  { path: '**',
     redirectTo: 'pages'
   }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
