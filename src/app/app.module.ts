import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StandardCalculatorService} from './standard-calculator/standard-calculator.service';
import { StandardCalculatorComponent } from './standard-calculator/standard-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    StandardCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StandardCalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
