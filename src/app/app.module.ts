import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SheroesComponent } from './sheroes/sheroes.component';
import { SheroDetailComponent } from './shero-detail/shero-detail.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SheroesComponent,
    SheroDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
