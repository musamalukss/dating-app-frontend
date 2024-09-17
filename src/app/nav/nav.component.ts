import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountsService } from '../_services/accounts.service';
import { NgIf } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, NgIf, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  accountServices = inject(AccountsService);
  model: any = {};

  login() {
    this.accountServices.login(this.model).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('Request has been completed'),
    });
  }

  logout() {
    console.log('logout');
    this.accountServices.logout();
  }
}
