import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/proudct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: any = Product;


  constructor(){

  }

}
