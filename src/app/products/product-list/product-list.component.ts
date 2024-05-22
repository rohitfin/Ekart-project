

import { Component, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GeneralService } from 'src/app/services/general.service';
import { Product } from 'src/app/Models/proudct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  // addToCart: number = 0;
  selectedProduct: any;
  productList: any = [];
  objStock = {
    all: 0,
    inStock:0,
    outStock:0,
  }
  selectedStock: string = 'all';

  @Input() searchTextVal: string = '';

  constructor(
    private title: Title,
    private meta : Meta,
    private generalService: GeneralService
  ){
    this.title.setTitle('Product List');
    this.meta.updateTag({ name: 'description', content: 'This is the description' });
    
    this.productList = this.generalService.products;
    this.objStock.all = this.productList.length;
    this.objStock.inStock = this.productList.filter((el:any) => el.is_in_inventory == true ).length;
    this.objStock.outStock = this.productList.filter((el:any) => el.is_in_inventory == false ).length;
  }


  
  onClickAddtoCard(type: string, item: any, position: number){
    var addToCart = item.addToCart;
    if (type == 'decrement' && addToCart > 0) {
      addToCart--;
    } else if (type == 'increment') {
      addToCart++;
    }
    this.productList[position].addToCart = addToCart;
  }


  //#region on Selected Stock from filter page (output decorator)
  onSelectedStock(value: string) {
    this.selectedStock = value;
    this.productList = this.generalService.products;
    if (this.selectedStock != 'all') {
      var filteredProduct = this.productList.filter((el: any) => {
        if(el.is_in_inventory.toString() == this.selectedStock){
          return el;
        }
      });
      this.productList = filteredProduct;
    }
  }
  //#endregion

}
