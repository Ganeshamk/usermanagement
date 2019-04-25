import { Component, OnInit, ViewChild } from '@angular/core';
import { UserElement } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users: any
  usersList: any = []
  searchText: any

  constructor(private dataService: DataService,
    private router: Router) {}

  ngOnInit() {
    this.getUSers()
  }
  
  /* filter the table data */
  applyFilter(filterValue: string) {
    this.usersList = this.users.filter((user) => {
      if(user.userName.toLowerCase().includes(filterValue.toLowerCase())) {
        return user
      }
    })
  }
  
  /* get Users */
  getUSers() {
    this.dataService.getUsers().then(data => {
      if(data) {
        this.users = data
        this.usersList = data
      }
    })
  }

  /* delete User */
  deleteUser(userId) {
    if(confirm('Are you sure you want delete this user?'))
      this.dataService.deleteUser(userId).then(() => {
        this.getUSers()
        this.dataService.showSuccess('User Deleted Successfully')
      });
  }

  /*clear the search text*/
  clearSearchText() {
    this.searchText = ''
    this.getUSers()
  }
}
