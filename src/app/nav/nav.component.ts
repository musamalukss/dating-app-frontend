import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountsService } from '../_services/accounts.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  private accountServices = inject(AccountsService);
  loggedIn = false;
  model : any = {};

   login(){
    this.accountServices.login(this.model).subscribe({
      next: (response: any) =>{ 
        console.log(response),
        this.loggedIn=true
      },
      error : (error:any) => {
        console.log(error);
      },
      complete: () => console.log("Request has been completed")
    
    })
  }

  logout(){
    console.log("logout")
    this.loggedIn=false;

  }

}
