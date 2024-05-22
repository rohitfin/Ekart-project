import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './products/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { FilterComponent } from './products/product-list/filter/filter.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { setBackground } from './customDirectives/setBackground.directives';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { DisabledProductDirective } from './customDirectives/disabled-product.directive';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SearchComponent,
    MainMenuComponent,
    TopMenuComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    setBackground,
    HighlightDirective,
    DisabledProductDirective,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
