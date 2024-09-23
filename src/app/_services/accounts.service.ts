import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User, UserRegistraion } from '../_models/user';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  currentUser = signal<User | null>(null);

  login(user: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', user).pipe(
      map(_user=> {
        if (_user) {
          localStorage.setItem('user', JSON.stringify(_user));
          this.currentUser.set(_user);
          console.log(this.currentUser.toString())
        }
      })
    );
  }

  register(user : UserRegistraion){
    return this.http.post<User>(this.baseUrl + 'account/register', user).pipe(
      map(_user=> {
        if (_user) {
          localStorage.setItem('user', JSON.stringify(_user));
          this.currentUser.set(_user);
        }
        return _user;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
