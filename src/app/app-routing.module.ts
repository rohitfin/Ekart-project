import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
