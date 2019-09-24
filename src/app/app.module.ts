import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxCurrencyModule } from "ngx-currency";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";

import { InputTextModule } from "primeng/inputtext";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxCurrencyModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
