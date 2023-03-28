import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm!:FormGroup
  show: any;
  buttonName:string= "ADD USER";
  user: any;
  constructor(private userservice:UserServiceService ) { }

  ngOnInit(): void {
    this.userForm=new FormGroup({
     "name":new FormControl(null,Validators.required),
     "email":new FormControl(null,Validators.required),
     "address":new FormControl(null,Validators.required),
     "password":new FormControl(null,Validators.required),
    })
  }
  postData(){
    this.userservice.postUser(this.userForm.value).subscribe(item=>item);
    
   
  }
  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
