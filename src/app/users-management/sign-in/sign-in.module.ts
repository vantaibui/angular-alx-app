import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../service/users.service';
import { SignInComponent } from './sign-in.component';

const materialModule = [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule];

const routes: Routes = [{ path: '', component: SignInComponent }];

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ...materialModule,
    ],
    providers: [UsersService],
    exports: [RouterModule],
})
export class SignInModule {}
