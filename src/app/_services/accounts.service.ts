import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private http = inject(HttpClient);
  private baseUrl = "http://localhost:5001/api/";

  login(user:any){
    return this.http.post(this.baseUrl +"account/login",user)
  }


}
