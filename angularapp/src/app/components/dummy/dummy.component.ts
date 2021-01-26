import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  currentClasses = {};
  currentStyles = {};
  users: ussr[]=[];
  enableAdd: boolean = true;
  loaded: boolean = true;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles();
   

    this.users.push({
      user_id: 'abcdef1234ghi',
      name: 'Mock Holliday',
      email: 'mock.holliday@example.com' ,
      birthdate: '1971-08-01T00:00:00+00:00',
      img: 'https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs',
      isActive: true,
      hide:false
    },
    {
      user_id: 'abcdef1234ghi',
      name: 'Sham',
      email: 'sham.holliday@example.com' ,
      birthdate: '1971-08-01T00:00:00+00:00'
      , img: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
      isActive: false,
      hide:false
      },
  
      {
        user_id: 'abcdef1234ghi',
        name: 'Ravi',
        email: 'ravi.holliday@example.com' ,
        birthdate: '1971-08-04T00:00:00+00:00'
        ,
        img: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
        isActive: true,
        hide:false
    });
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
  onSubmit(e) {
    console.log(123)
e.preventDefault()
  }

  fireEvent(eve) {
    console.log(eve.type) 
console.log(eve.target.value)    
  }
  // toggleHide(user: ussr) {
  //   user.hide = !user.hide; 
  // }

}

interface ussr{
  user_id: string,
  name: string,
  email: string,
  birthdate: string,
  img?: string,
  isActive?: boolean,
  hide:boolean
}
