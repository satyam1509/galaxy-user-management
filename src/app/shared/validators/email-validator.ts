import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl) {
  if ((control && control.value !== null) || control.value !== undefined) {
    const regex = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

    if (!regex.test(control.value)) {
      return {
        isError: true,
      };
    }
  }
  return null;
}
