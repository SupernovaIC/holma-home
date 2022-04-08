import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  url = "https://thankful-field-03b6d5110.azurestaticapps.net/#/home?isExternal=true";
  height = 200;

  constructor() { }

  ngOnInit(): void {
    this.height = window.innerHeight;
  }

}
