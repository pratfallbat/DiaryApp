import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }

  showExtended: boolean;
  currentClasses = {};
  currentStyles = {};
  users: User[]=[];
  enableAdd: boolean = true;
  loaded: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('f') form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('form not valid')
    }
    else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);      // add to beginning of array
      this.form.reset();
    }   
  }



  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
      this.loaded = true;
    })
    this.setCurrentClasses();
    this.setCurrentStyles();
   
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: true,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmaial.com',
        isActive: false,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }
 
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
      // ,
      // 'big-text':this.loaded
    }
  
  }
  setCurrentStyles(){
    this.currentStyles = {
      'padding-top': this.loaded ? '40px' : '0',
      'font-size': this.loaded?'50px': '0'
    }
  }  
  


}