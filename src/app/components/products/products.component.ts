import { ProductInterface } from '../../interfaces/interfaces.product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsList: ProductInterface []=[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.productService.getProducts().subscribe({
      next: (result) => {
        this.productsList = result.rickandmortyapi;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
