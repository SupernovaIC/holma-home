import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  url = "https://thankful-field-03b6d5110.azurestaticapps.net/#/home?isExternal=true";
  height = 200;
  visibilityFrame = false;
  visibilityError = true;
  errorMsg: string = "";

  constructor(private translateService: TranslateService) {
    this.errorMsg = this.translateService.instant('errorMsg');
  }

  ngOnInit(): void {
    this.height = window.innerHeight;
  }

  failLoading() {
    this.visibilityFrame = true;
    this.visibilityError = false;
  }
}
