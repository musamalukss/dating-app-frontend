import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './test-errors/test-errors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'',runGuardsAndResolvers:'always', canActivate:[authGuard],
        children:[
            {path:'members', component: MembersListComponent},
            {path:'members/:username', component: MemberDetailComponent},
            {path:'lists', component: ListsComponent},
            {path:'messages', component: MessagesComponent},
            {path:'member/edit', component: MemberEditComponent},
        ]

    },

    {path:'errors',component:TestErrorsComponent},
    {path:'not-found',component:NotFoundComponent},
    {path:'server-error',component:ServerErrorComponent},

    {path:'**', component: HomeComponent,pathMatch:'full'},

];
