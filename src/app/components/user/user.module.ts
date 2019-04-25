import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserComponent } from './user.component'
import { DataService } from '../../services/data.service';
import { UserRoutes } from './user.routing';
import { ValidationService } from '../../services/validator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ControlMessageComponent } from '../control-message/control-message.component';

@NgModule({
    imports: [UserRoutes,
        ReactiveFormsModule, 
        FormsModule,
        CommonModule
     ],
    declarations: [UserComponent, ControlMessageComponent],
    providers: [DataService, ValidationService]
})

export class UserModule {}
