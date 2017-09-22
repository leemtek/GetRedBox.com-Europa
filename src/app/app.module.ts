import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Custom Modules
import { ReCaptchaModule } from "angular2-recaptcha";

import { AppComponent } from './app.component';

// Shared
import { HeaderComponent } from "./shared/header.component";
import { FooterComponent } from "./shared/footer.component";

// Main Pages
import { HomeComponent } from "./main/home.component";
    import { HomeContactUsComponent } from "./main/home.contact-us.component";

@NgModule({
    declarations: [
        AppComponent,

        HeaderComponent,
        FooterComponent,

        HomeComponent,
        HomeContactUsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReCaptchaModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
