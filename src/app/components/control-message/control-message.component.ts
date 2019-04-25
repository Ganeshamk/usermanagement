import { Component, OnInit , Input } from '@angular/core';
import { FormGroup, FormControl }    from '@angular/forms';
import {  ValidationService }        from '../../services/validator';

@Component({
  selector: 'app-control-message',
  templateUrl: './control-message.component.html',
  styleUrls: ['./control-message.component.css']
})

export class ControlMessageComponent implements OnInit {
  @Input() control: FormControl;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
                       
  get errorMessage() {                             
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
