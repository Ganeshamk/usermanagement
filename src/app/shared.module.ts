import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControlMessageModule } from './components/control-message';

@NgModule({
  imports: [BrowserModule, ControlMessageModule],
  exports: [BrowserModule, ControlMessageModule]
})

export class SharedModule { }
