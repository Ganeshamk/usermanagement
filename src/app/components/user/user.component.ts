import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, Validators} from '@angular/forms'
import { UserElement } from '../../models/user.model';
import { ValidationService } from '../../services/validator';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: any
  roles: any[] = [ 'admin', 'user']
  userId: any
  userDetails: any
  users: any
  newUserId: any

  constructor(private _formBuilder: FormBuilder,
     private router: ActivatedRoute,
     private dataService: DataService,
     private route: Router) { 
    this.userId = this.router.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    /* userForm */
    this.userForm = this._formBuilder.group({
      'userId':[''],
      'userName': ['', Validators.required],
      'emailId': ['', [Validators.required, ValidationService.emailValidator]],
      'phoneNumber': [''],
      'role': ['', Validators.required],
      'address': ['', Validators.required],
      'url': [''],
    })

    if(this.userId) {
      this.dataService.getUserById(this.userId).then(data => {
        if(data) {
          this.userForm.patchValue(data)
        }
      });
    } else {
      /* Generating New UserId For Creating a new User */
      this.dataService.getUsers().then(data => {
        if(data) {
          this.users = data
          this.newUserId = this.users[this.users.length - 1].userId + 1
        }
      })
    }
  }

  /* Update User */
  updateUser() {
    this.dataService.updateUser(this.userForm.value).then(data => {
      if(data) {
        this.dataService.showSuccess('Successfully Updated User')
      }
    })
    this.route.navigate(['/users'])
  }

  /* Add User */
  addUser() {
    this.userForm.value.userId = this.newUserId
  
    this.dataService.addUser(this.userForm.value).then(data => {
      if(data) {
        this.dataService.showSuccess('Successfully Added User')
      }
    })
    this.route.navigate(['/users'])
  }
}
