import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../service/users.service';

const routes: Routes = [{ path: '', component: SignUpComponent }];

@NgModule({
    declarations: [SignUpComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    providers: [UsersService],
    exports: [RouterModule],
})
export class SignUpModule {}
