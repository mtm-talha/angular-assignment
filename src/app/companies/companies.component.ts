import { Component } from '@angular/core'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  companies = [
    {
      name: 'Microsoft',
      image: '../assets/img/companies-logo/Microsoft-Logo.png',
    },
    {
      name: 'Microsoft',
      image: '../assets/img/companies-logo/Allianz_Logo__438x220px.png',
    },
    {
      name: 'Upwork',
      image: '../assets/img/companies-logo/Upwork-Logo.png',
    },
    {
      name: 'volvo',
      image: '../assets/img/companies-logo/volvo logo.png',
    },
    {
      name: 'grab',
      image: '../assets/img/companies-logo/grab logo.png',
    },
    {
      name: 'Verizon',
      image: '../assets/img/companies-logo/Verizon_2015_logo_-vector.svg.png',
    },
    {
      name: 'coinbase',
      image: '../assets/img/companies-logo/coinbase logo.png',
    },
    {
      name: 'expedian',
      image: '../assets/img/companies-logo/expedian logo.png',
    },
    {
      name: 'airtable',
      image: '../assets/img/companies-logo/airtable-square-cube-logo.png',
    },
    {
      name: 'Magento',
      image: '../assets/img/companies-logo/1280px-Magento.svg.png',
    },
    {
      name: 'Carrera',
      image: '../assets/img/companies-logo/carrera.png',
    },
    {
      name: 'Bonanza',
      image: '../assets/img/companies-logo/bonanza-1-logo-png-transparent.png',
    },
    {
      name: 'We Transfer',
      image: '../assets/img/companies-logo/wetransfer logo.png',
    },{
      name: 'Suzuki',
      image: '../assets/img/companies-logo/Suzuki_Motors-Logo.wine.png',
    },{
      name: 'Algolia',
      image: '../assets/img/companies-logo/Algolia-logo.svg.png',
    },{
      name: 'Heineken',
      image: '../assets/img/companies-logo/Heineken-Logo.png',
    },
  ]
}
