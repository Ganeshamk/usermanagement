import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { UsersRoutes } from './users.routing';
import { UsersComponent } from './users.component';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderByPipe } from '../../pipes/orderBy';

@NgModule({
    imports: [
        UsersRoutes,
        MatInputModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        UsersComponent,
        OrderByPipe
        
    ],
    providers: [DataService]
})

export class UsersModule {}
