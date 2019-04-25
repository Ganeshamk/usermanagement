import { Injectable } from '@angular/core';
import { UserElement } from '../models/user.model'
import { Observable, BehaviorSubject } from 'rxjs'  
 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users = [
    {userId: 1, userName: "Ganesh", emailId: 'ganesh@tapontech.com', phoneNumber: 9164082559, role: 'admin', address: "Hassan", url: "wrapo.io"},
    {userId: 2, userName: "Rupesh", emailId: 'rupesh@tapontech.com', phoneNumber: 9901858736, role: 'user', address: "Holenarasipura", url: "wrapo.io"},
    {userId: 3, userName: "Raj", emailId: 'raj@tapontech.com', phoneNumber: 9483553271, role: 'admin', address: "Mandya", url: "wrapo.io"},
    {userId: 4, userName: "Rajaaa", emailId: 'raj@tapontech.com', phoneNumber: 9483553271, role: 'user', address: "Mysore", url: "wrapo.io"}
  ]

  constructor() {
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  /* get Users */
  getUsers() {
    let users = JSON.parse(localStorage.getItem('users'))

    return new Promise(resolve => {
      resolve(users)
    })
  }  

  /* Get User details by UserId */
  getUserById(userId: any) {
    let users = JSON.parse(localStorage.getItem('users'))

    return new Promise(resolve => {
      users.forEach(user => {
        if(user.userId == userId) {
          let index = users.indexOf(user) 
          resolve(users[index])
        }
      })
    })
  }

  /* Delete User by UserId */
  deleteUser(userId: number) {
    let users = JSON.parse(localStorage.getItem('users'))

    return new Promise(resolve => {
      const index = users.findIndex(user => user.userId === userId)
      users.splice(index, 1)
      localStorage.setItem('users', JSON.stringify(users))
      resolve(users)
    })
  }

  /* Add User */
  addUser(userData: UserElement) {
    let users = JSON.parse(localStorage.getItem('users'))
    
    return new Promise(resolve => {
      users.push(userData)
      localStorage.setItem('users', JSON.stringify(users))
      resolve(users)
    })
  }

  /* Update User */
  updateUser(userData: UserElement) {
    let users = JSON.parse(localStorage.getItem('users'))

    return new Promise(resolve => {
      const index = users.findIndex(user => user.userId === userData.userId)
      users[index].userId = userData.userId
      users[index].userName = userData.userName
      users[index].emailId = userData.emailId
      users[index].phoneNumber = userData.phoneNumber
      users[index].url = userData.url
      users[index].address = userData.address
      users[index].role = userData.role
      localStorage.setItem('users', JSON.stringify(users))
      resolve(users)
    })
  }
}
