import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { SteinglengthPipe } from '../../../pipes/steinglength.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SteinglengthPipe],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product;
}
