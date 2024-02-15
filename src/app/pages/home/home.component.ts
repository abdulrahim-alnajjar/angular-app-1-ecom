import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductListComponent } from '../../components/product-list/product-list.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductListComponent, SliderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
