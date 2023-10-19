import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/store/auth.state';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(
    private adminData: AdminDataService,
    private store: Store,
    private title: Title,
  ) { 
    this.title.setTitle("Foodie: Список пользователей")
  }
  authToken: string = '';
  users: any;
  ngOnInit(): void {
    this.store.select(AuthState.getAuthToken).subscribe({
      next: data => {
        this.authToken = data
      }
    })
    this.adminData.getUsers(this.authToken).subscribe({
      next: data => {
        this.users = data
        console.log(this.users)
      }
    })
  }

  returnUserRole(role: string) {
    return role === 'admin' ? 'Администратор' : 'Пользователь'
  }



}
