import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { MessageAboardComponent } from './message-aboard/message-aboard.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    
 
    {
      path: 'messageAboard',
      component: MessageAboardComponent,
    },



    {
      path: '',
      redirectTo: 'messageAboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
