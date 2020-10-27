import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { ReactiveComponent } from './components/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
