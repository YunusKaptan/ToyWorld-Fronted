import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
 users:User[] = [ ];

 constructor(
  private userService: UserService,
  private activatedRoute:ActivatedRoute
  ) {}

 ngOnInit(): void {
  this.getUsers()
 }

 getUsers(){
  this.userService.getUsers().subscribe(response=>{
  console.log(response)
  this.users=response.data
  });
 }

//  getUserByEmail(email:string) {
//   this.userService.getByUserEmail(email).subscribe(response=>{
//     this.users = response.data
//   })   
}

