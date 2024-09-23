import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../../_services/member.service';
import { Member } from '../../_models/members';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css'
})
export class MembersListComponent implements OnInit {
  private memberService = inject(MemberService);
  members : Member[] = [];
  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers (){
    this.memberService.getMembers().subscribe({
      next: members => this.members = members
    })
  }

}
