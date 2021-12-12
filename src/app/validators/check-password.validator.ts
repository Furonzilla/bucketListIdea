import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkPasswordValidator(controlName1 : string, controlName2 : string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Get first control value
      const control1 = control.get(controlName1)
      // Get second control value
      const control2 = control.get(controlName2);
      if (control1?.value === control2?.value) {
        return null;
      }
      return { key: true }; // boolean pour afficher un message
    };
  }


