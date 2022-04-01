import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actionsArr: any = [
    {
      currencyFromLong:'BitCoin',
      currencyFromShort:'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 1.36,
      amountTo: 306102.23
    },
    {
      currencyFromLong:'BitCoin',
      currencyFromShort:'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 1.66,
      amountTo: 406102.23
    },
    {
      currencyFromLong:'Etherium',
      currencyFromShort:'ETH',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 2.16,
      amountTo: 506102.23
    },
    {
      currencyFromLong:'BitCoin',
      currencyFromShort:'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 2.76,
      amountTo: 606102.23
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
