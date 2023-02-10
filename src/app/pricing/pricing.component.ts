import { Component } from '@angular/core'
import { pricingPackage } from './pricing'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  packages: pricingPackage[] = [
    {
      name: 'Personal',
      description: 'Special first packet for all',
      price: '$8',
      isMonthly: false,
      featuresList: [
        'Up to 5 page each group',
        'Up to 10 group page',
        '5 Days group page saved',
      ],
    },
    {
      name: 'Regular',
      description: 'Recommended for personal pro',
      isActive: true,
      price: '$20',
      isMonthly: true,
      featuresList: [
        'Up to 15 page each group',
        'Download page up to 20 page',
        'Up to 10 group page',
        '15 Days group page saved',
      ],
    },
    {
      name: 'Premium',
      description: 'Packet for startup and company',
      price: '$48',
      isMonthly: true,
      featuresList: [
        'Unlimited group pages',
        'Unlimited download pages',
        'Unlimited page each group',
        'Customize sorting group pages',
        'Customize group page name',
        '30 Days group page saved',
      ],
    },
  ]
}
