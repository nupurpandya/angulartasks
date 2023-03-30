import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTTPapi';
  id: any;
  name: any;
  email: any;
  address: any;
  password: any;
  getListData(data:any){
    this.id=data.id,
    this.name=data.name,
    this.email=data.email,
    this.address=data.address
    this.password=data.password
    console.log(this.id);
    
  }
}
