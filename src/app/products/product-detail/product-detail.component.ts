import { Component, Input, TemplateRef, inject } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/Models/proudct';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input() getProductListComp: ProductListComponent | undefined
  product: any = Product;

  ngOnInit(){
    this.product = this.getProductListComp?.selectedProduct;
    console.log(this.product);
  }

  onClickCloseProdDetail(){
    this.product = Product;
  }

}
