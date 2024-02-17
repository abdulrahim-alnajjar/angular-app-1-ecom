import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductListComponent } from '../../components/product-list/product-list.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { CommonModule } from '@angular/common';
import { ElementVisibilityService } from '../../services/elementVisibility.service';
import { MagnifyingEffect } from '../../directives/magnifyingeffect.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ProductListComponent,
    SliderComponent,
    CommonModule,
    MagnifyingEffect,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  /** Statistics */
  constructor(private onScreen: ElementVisibilityService) {}
  @ViewChild('statistics') elementRef: ElementRef;
  cutomerLimit: number = 2658425;
  cutomerCount: number =
    this.cutomerLimit > 1000 ? this.cutomerLimit - 1000 : this.cutomerLimit / 2;

  productsLimit: number = 25362547;
  productsCount: number =
    this.productsLimit > 1000
      ? this.productsLimit - 1000
      : this.productsLimit / 2;

  sellerLimit: number = 10906;
  sellerCount: number =
    this.sellerLimit > 1000 ? this.sellerLimit - 1000 : this.sellerLimit / 2;

  brandsLimit: number = 7125;
  brandsCount: number =
    this.brandsLimit > 1000 ? this.brandsLimit - 1000 : this.brandsLimit / 2;

  ngAfterViewInit(): void {
    // Increase the counters when elements become visible
    this.onScreen.observeElementVisibility(this.elementRef.nativeElement);
    this.onScreen.elementVisibility.subscribe((isVisible) => {
      if (isVisible) {
        if (this.cutomerCount < this.cutomerLimit) {
          let setIntervalFlag = setInterval(() => {
            this.cutomerCount >= this.cutomerLimit
              ? clearInterval(setIntervalFlag)
              : this.cutomerCount++;
          });
        }
        if (this.productsCount < this.productsLimit) {
          let setIntervalFlag = setInterval(() => {
            this.productsCount >= this.productsLimit
              ? clearInterval(setIntervalFlag)
              : this.productsCount++;
          });
        }
        if (this.sellerCount < this.sellerLimit) {
          let setIntervalFlag = setInterval(() => {
            this.sellerCount >= this.sellerLimit
              ? clearInterval(setIntervalFlag)
              : this.sellerCount++;
          });
        }
        if (this.brandsCount < this.brandsLimit) {
          let setIntervalFlag = setInterval(() => {
            this.brandsCount >= this.brandsLimit
              ? clearInterval(setIntervalFlag)
              : this.brandsCount++;
          });
        }
      }
    });
  }
}
