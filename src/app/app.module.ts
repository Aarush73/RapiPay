import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comp/header/header.component';
import { NavigatorComponent } from './comp/navigator/navigator.component';
import { LeftpanelComponent } from './comp/leftpanel/leftpanel.component';
import { MainpanelComponent } from './comp/mainpanel/mainpanel.component';
import { RightpanelComponent } from './comp/rightpanel/rightpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    LeftpanelComponent,
    MainpanelComponent,
    RightpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
