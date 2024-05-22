import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  searchText:string = '';
  getSearchText(value: string){
    this.searchText = value;
  }

  @ViewChild(ProductListComponent) sendProductListComponent: ProductListComponent | undefined;


}
