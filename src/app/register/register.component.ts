import { Component, inject, input, OnInit, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccountsService } from '../_services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  cancelRegister = output<boolean>();
  registerForm: FormGroup = new FormGroup({});
  model: any = {};
  private accountService = inject(AccountsService);
  private toastr = inject(ToastrService);
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('Hello', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
    });
  }

  register() {
    // this.accountService.register(this.model).subscribe({
    //   next: () => {
    //     this.toastr.success("Registration Successful!")
    //     this.cancel()
    //   },
    //   error: (error: any) => {
    //     this.toastr.error(error.error)
    //   }
    // });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
