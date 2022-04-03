import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actionsArr: any = [
    {
      currencyFromLong: 'BitCoin',
      currencyFromShort: 'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 1.36,
      amountTo: 306102.23
    },
    {
      currencyFromLong: 'BitCoin',
      currencyFromShort: 'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 1.66,
      amountTo: 406102.23
    },
    {
      currencyFromLong: 'Etherium',
      currencyFromShort: 'ETH',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 2.16,
      amountTo: 506102.23
    },
    {
      currencyFromLong: 'BitCoin',
      currencyFromShort: 'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 2.76,
      amountTo: 606102.23
    }
  ]

  blogPostsArr: any = [
    {
      created_at: new Date().toLocaleDateString('en-GB'),
      title: 'ETH TO NAIRA EXCHANGE RATE IS NOT #400 PER A SINGLE COIN',
      category: 'Business',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
      created_at: new  Date().toLocaleDateString('en-GB'),
      title: 'ETH TO NAIRA EXCHANGE RATE IS NOT #400 PER A SINGLE COIN',
      category: 'Business',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
      created_at: new Date().toLocaleDateString('en-GB'),
      title: 'ETH TO NAIRA EXCHANGE RATE IS NOT #400 PER A SINGLE COIN',
      category: 'Business',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
