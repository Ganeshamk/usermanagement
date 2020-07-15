import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DataService } from '../../services/data.service';
import { UserRoutes } from './user.routing';
import { ValidationService } from '../../services/validator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
    imports: [UserRoutes,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        CommonModule
    ],
    declarations: [UserComponent],
    providers: [DataService, ValidationService]
})

export class UserModule { }
