import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit,OnChanges {
  condition:boolean=true;
  @Input() id:any;
  @Input() name:any;
  @Input() email:any;
  @Input() address:any;
  @Input() password:any;
 
  public userForm!:FormGroup
  
  // show: any;
  // buttonName:string= "ADD USER";
  user: any;
  buttonnamechange:string="Submit";
  constructor(private userservice:UserServiceService ) { }
  ngOnChanges(changes: SimpleChanges): void {
if (this.id!=undefined) {
  
  this.userForm.setValue({
    // id:this.id,
    name:this.name,
    email:this.email,
    address:this.address,
   password:this.password
  })
  this.buttonnamechange="UPDATE"
  this.condition=false;
}
  }

  ngOnInit(): void {
    this.userForm=new FormGroup({
     "name":new FormControl(null,Validators.required),
     "email":new FormControl(null,Validators.required),
     "address":new FormControl(null,Validators.required),
     "password":new FormControl(null,Validators.required),
    })
  }
  postData(){
    this.userservice.postUser(this.userForm.value).subscribe(item=>{
      // this.userservice.getUser().subscribe((res:any)=>this.user=res);
    });
    
   
  }
  editUser(){
    return this.userservice.updateUser(this.id,this.userForm.value).subscribe((res)=>res)
  }
  // toggle() {
  //   this.show = !this.show;

  //   // Change the name of the button.
  //   if(this.show)  
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "Show";
  // }
  // getRef(item:any){
  //   console.log(item.name);
    
  // }
}
