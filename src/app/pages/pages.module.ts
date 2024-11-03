import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {
    NbCardModule,NbButtonModule,
  } from '@nebular/theme';
MessageAboardModule
import { MessageAboardModule } from './message-aboard/message-aboard.module';

  const materialModules = [
      NbCardModule,NbButtonModule,
  ]

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MessageAboardModule,
    ...materialModules
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
