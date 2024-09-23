import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountsService } from '../_services/accounts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  cancelRegister = output<boolean>();
  model: any = {};
  private accountService = inject(AccountsService);
  private toastr = inject(ToastrService);


  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.toastr.success("Registration Successful!")
        this.cancel()
      },
      error: (error: any) => {
        this.toastr.error(error.error)
      }
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
