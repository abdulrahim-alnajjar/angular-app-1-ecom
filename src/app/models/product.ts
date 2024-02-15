import { Renderer2 } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public price: number,
    public stock: number,
    public name: string,
    public brand: string,
    public details: string,
    public images: string[],
    public color: string[]
  ) {
    id = Number();
    price = Number();
    stock = Number();
    name = String();
    brand = String();
    details = String();
    images = Array();
    color = Array();
  }
}
