import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';
import { FormsModule } from '@angular/forms';
import { TabledataComponent } from './tabledata/tabledata.component';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    TabledataComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
