import { Injectable }      from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Injectable()
                                      
export class ValidationService {

  static getValidatorErrorMessage(validatorName: string, validatorValue ? : any) {
    let config = {
      'required': 'is required',
      'invalidEmailAddress': 'Invalid email address',
    }
    return config[validatorName]
  }

  

  static emailValidator(control) {
    if (control.value) {
      if (control.value.match(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)) {
        return null
      } else {
        return {
          'invalidEmailAddress': true
        }
      }
    }
  }

  
}
