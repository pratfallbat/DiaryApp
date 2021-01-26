import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
import { map } from 'rxjs/operators';


import {debounceTime ,distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-dummytwo',
  templateUrl: './dummytwo.component.html',
  styleUrls: ['./dummytwo.component.css']
})
export class DummytwoComponent implements OnInit {
  // model: Signup = new Signup();
  // @ViewChild('f') form: any;

  constructor() { }


  // onSubmit() {
  //   if (this.form.valid) {
  //     console.log("Form Submitted!");
  //     this.form.reset();
  //   }
  // }



  searchField: FormControl; 
  searches: string[] = []; 

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
    .pipe(debounceTime(500),distinctUntilChanged())
    .subscribe(term => {
      this.searches.push(term);
    });
  }

}
class Signup {
  constructor(public firstName: string = '') {
  }

   
}