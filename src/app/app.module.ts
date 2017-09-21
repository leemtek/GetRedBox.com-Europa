import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Shared
import { HeaderComponent } from "./shared/header.component";
import { FooterComponent } from "./shared/footer.component";

// Main Pages
import { HomeComponent } from "./main/home.component";

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
