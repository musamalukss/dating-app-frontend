import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Member} from '../_models/members';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  registermode = false;
  users: any;
  registerToggle() {
    this.registermode = !this.registermode;
  }

  cancelRegistrationMode(event: boolean) {
    this.registermode = event;
  }
}
