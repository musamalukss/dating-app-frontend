import { Component, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../_models/members';
import { AccountsService } from '../../_services/accounts.service';
import { MemberService } from '../../_services/member.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule, FormsModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css',
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm? :NgForm;
  @HostListener('window;beforeunload',['$event']) hostListener($event:any){
    if(this.editForm?.dirty){
      $event.returnvValue=true;
    }
  };
  member?: Member;
  private accountService = inject(AccountsService);
  private memberService = inject(MemberService);
  private tostr =inject(ToastrService);


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
    console.log(this.member);
    this.tostr.success("Member Updated successfully");
    this.editForm?.reset(this.member);
  }
}
