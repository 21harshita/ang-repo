import { TableService } from './table/table.service';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserloginComponent } from './userlogin/userlogin.component';
// import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { ExpenseGuard } from './auth guard/expense.guard';
import { MultiplierPipe } from './multiplier';
import { PipeComponent } from './pipe/pipe.component';
import { Mypipe } from './custom pipes/description';
import { BreakLine } from './custom pipes/breaklines';
import { Uppercase } from './custom pipes/uppercase';
import { HttpReqComponent } from './http-req/http-req.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductCreateComponent } from './crud-api/product-create/product-create.component';
import { ProductDetailsComponent } from './crud-api/product-details/product-details.component';
import { ProductListComponent } from './crud-api/product-list/product-list.component';
import { IndexComponent } from './crud-api/index/index.component';
import { FileUploadComponent } from './file-upload/file-upload.component'
@NgModule({
  declarations: [AppComponent, TableComponent, AddUserComponent, UserloginComponent, UserComponent, ParentComponent , MultiplierPipe, PipeComponent,Mypipe,BreakLine, Uppercase, HttpReqComponent, ProductCreateComponent, ProductDetailsComponent, ProductListComponent, IndexComponent, FileUploadComponent],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    NgbModule,
    HttpClientModule
  ],
  providers: [ExpenseGuard,TableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
