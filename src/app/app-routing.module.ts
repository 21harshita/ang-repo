import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { TableComponent } from './table/table.component';
import { UserloginComponent } from './userlogin/userlogin.component';
// import { UserLogoutComponent } from './user-logout/user-logout.component';
import { ExpenseGuard } from './auth guard/expense.guard';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpReqComponent } from './http-req/http-req.component';
import { ProductListComponent } from './crud-api/product-list/product-list.component';
import { ProductDetailsComponent } from './crud-api/product-details/product-details.component';
import { ProductCreateComponent } from './crud-api/product-create/product-create.component';
import { IndexComponent } from './crud-api/index/index.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'userlogin',
  // },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
  {
    path: 'http-req',
    component: HttpReqComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'userlogin',
    component: UserloginComponent,
  },
  { path: 'crud-api', redirectTo: 'crud-api/index', pathMatch: 'full' },
  { path: 'crud-api/index', component: IndexComponent },
  { path: 'crud-api/:postId/product-list', component: ProductListComponent },
  { path: 'crud-api/:postId/product-details', component: ProductDetailsComponent },
  { path: 'crud-api/product-create', component: ProductCreateComponent },
  {
    path: 'table',
    canActivate: [ExpenseGuard],
    component: TableComponent,
   
  },
  {
    path: 'table/add-user/:firstName',
    component: AddUserComponent,
    
  },
  {
    path : 'add-user',
    component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
