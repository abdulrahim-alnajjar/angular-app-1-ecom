import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../product-list/product/product.component';
import { ProductDetailsComponent } from '../product-list/product-details/product-details.component';
import { Product } from '../../models/product';
import { FilterComponent } from '../filtering-tools/filter/filter.component';
import { SearchComponent } from '../filtering-tools/search/search.component';
import DataJsonFile from '../../../assets/products.json';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    ProductDetailsComponent,
    FilterComponent,
    SearchComponent,
  ],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  selectedProduct: Product = {
    id: Number(),
    price: Number(),
    stock: Number(),
    name: String(),
    brand: String(),
    images: Array(),
    color: Array(),
    details: String(),
  };

  allProducts = DataJsonFile.products;
  filteredProducts = this.allProducts;
  numOfProducts = this.allProducts.length;

  // Filter with avilability
  onFilterAvilability(value: string) {
    this.filteredProducts =
      value === 'inStock'
        ? this.allProducts.filter((e) => e.stock)
        : value === 'outOfStock'
        ? this.allProducts.filter((e) => !e.stock)
        : this.allProducts;

    this.numOfProducts = this.filteredProducts.length;
  }

  // Searching
  onSearching(value: string) {
    this.filteredProducts = this.allProducts.filter((e) =>
      e.name.toLocaleLowerCase().match(value.toLocaleLowerCase())
    );
    this.numOfProducts = this.filteredProducts.length;
  }
}
