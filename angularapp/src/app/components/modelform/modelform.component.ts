import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  myform: FormGroup;
  firstName: FormControl;
  constructor() {  }
  CreateFormControl() {
    this.firstName= new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
  }
  CreateForm() {
    this.myform = new FormGroup({
      firstName: this.firstName
    });
    
  }

  ngOnInit() {
    this.CreateFormControl();
    this.CreateForm();
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.myform.reset();
    }
  }

}
