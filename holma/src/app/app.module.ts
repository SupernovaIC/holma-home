import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { SafePipe } from './common/pipes/safe-pipe.pipe';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    GetQuoteComponent,
    SafePipe,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  availableLng = ['en', 'es'];

//start the translation service
  constructor(private translateService: TranslateService) {
    //defines the default language
    let tmpLng = 'en';

    //gets the default browser language
    const currentLng = window.navigator.language.substring(0,2);

    if (this.availableLng.includes(currentLng))
       tmpLng = currentLng;

    translateService.setDefaultLang(tmpLng);
  }
}
export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
