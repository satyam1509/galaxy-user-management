import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl) {
  if ((control && control.value !== null) || control.value !== undefined) {
    const regex = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}"
    );

    if (!regex.test(control.value)) {
      return {
        isError: true,
      };
    }
  }
  return null;
}
