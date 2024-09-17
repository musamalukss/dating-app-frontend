import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountsService } from './_services/accounts.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient)
  private accountsService = inject(AccountsService)
  title = 'Dating App';
  users:any;

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user:User = JSON.parse(userString);
    this.accountsService.currentUser.set(user);
  }

  getUsers(){
    this.http.get("http://localhost:5001/api/users").subscribe({
      next: response => this.users = response,
      error : error => console.error(error),
      complete: () => console.log("Request has been completed")
    })

  }

}
