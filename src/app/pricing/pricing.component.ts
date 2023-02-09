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
    },
    {
      name: 'Regular',
      description: 'Recommended for personal pro',
      isActive: true,
    },
    {
      name: 'Premium',
      description: 'Packet for startup and company',
    },
  ]
}
