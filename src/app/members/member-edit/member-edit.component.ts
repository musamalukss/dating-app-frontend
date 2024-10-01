import { Component, inject, OnInit } from '@angular/core';
import { Member } from '../../_models/members';
import { AccountsService } from '../../_services/accounts.service';
import { MemberService } from '../../_services/member.service';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css',
})
export class MemberEditComponent implements OnInit {
  member?: Member;
  private accountService = inject(AccountsService);
  private memberService = inject(MemberService);

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const user = this.accountService.currentUser();
    if (!user) return;
    this.memberService
      .getMember(user.username)
      .subscribe({
        next: (member) => {
          console.log(member);
          this.member = member;
        },
      })
      
  }
}
