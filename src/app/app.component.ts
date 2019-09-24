import { Component } from "@angular/core";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myForm: FormGroup;
  title = 1234;
  current = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ".",
    precision: 2,
    prefix: "$ ",
    suffix: "",
    thousands: ",",
    nullable: true
  };
  constructor(private readonly fb: FormBuilder) {
    this.myForm = this.fb.group({
      amtHigh: "",
      amtLow: ""
    });
  }
  get amount() {
    return this.myForm["amtHigh"] as FormControl;
  }
}
