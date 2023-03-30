import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Output() myevent=new EventEmitter;
  user: any;

  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.userservice.getUser().subscribe((res:any)=>this.user=res);
  
  }
  deleteUser(userid:any){
    this.userservice.delUser(userid).subscribe(item=>item)
    this.userservice.getUser().subscribe((res:any)=>this.user=res);
  }
  editUser(id:any){
    this.userservice.getDataById(id).subscribe((res)=>console.log(res) );
  }
}
