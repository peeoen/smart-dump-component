import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TarvelsComponent } from './tarvels/tarvels.component';
import { TravelPlaceComponent } from './travel-place/travel-place.component';


@NgModule({
  declarations: [
    AppComponent,
    TravelPlaceComponent,
    TarvelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
