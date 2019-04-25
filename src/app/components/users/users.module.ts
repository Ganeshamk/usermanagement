import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { UsersRoutes } from './users.routing';
import { UsersComponent } from './users.component';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        UsersRoutes,
        MatInputModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        UsersComponent
    ],
    providers: [DataService]
})

export class UsersModule {}
