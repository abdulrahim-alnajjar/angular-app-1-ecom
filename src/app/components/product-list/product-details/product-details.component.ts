import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  @Input() productDetails: Product;
}
