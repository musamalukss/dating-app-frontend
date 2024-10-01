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
  memberService = inject(MemberService);

  ngOnInit(): void {
    if(this.memberService.members().length === 0) this.loadMembers();
    
  }

  loadMembers (){
    this.memberService.getMembers()
  }

}
