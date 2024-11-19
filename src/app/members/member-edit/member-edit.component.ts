import {
  Component,
  HostListener,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Member } from '../../_models/members';
import { AccountsService } from '../../_services/accounts.service';
import { MemberService } from '../../_services/member.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PhotoEditorComponent } from '../photo-editor/photo-editor.component';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule, FormsModule, PhotoEditorComponent],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css',
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm?: NgForm;
  @HostListener('window;beforeunload', ['$event']) hostListener($event: any) {
    if (this.editForm?.dirty) {
      $event.returnvValue = true;
    }
  }
  member?: Member;
  private accountService = inject(AccountsService);
  private memberService = inject(MemberService);
  private tostr = inject(ToastrService);

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const user = this.accountService.currentUser();
    if (!user) return;
    this.memberService.getMember(user.username).subscribe({
      next: (member) => {
        console.log(member);
        this.member = member;
      },
    });
  }

  UpdateMember() {
    if (this.editForm?.dirty) {
      this.memberService.updateMember(this.editForm.value).subscribe({
        next: (response) => {
          this.tostr.success('Member Updated successfully');
        },
      });
    } else {
      this.tostr.error('Member data has not been changed');
    }
  }

  OnMemberChange(event : Member){
    console.log("event",event)
    this.member =event;
  }
}
