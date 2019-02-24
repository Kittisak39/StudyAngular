import { Component, OnInit , Output,  EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Output() change = new EventEmitter();
  constructor(
    private formBulid: FormBuilder
  ) {

  }

  ngOnInit() {
    this.formGroup = this.formBulid.group({
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      LastName: ['', [Validators.required, Validators.minLength(2)]],
      EMail: ['',[Validators.email]],
      Age: [18, [Validators.min(0), Validators.max(99)]]
    });
  }
 
  EmailValidator(control: AbstractControl) {
    const value: string = control.value;
    if (value && value.includes('@')) {
      return null;
    }
    return {
      email: true
    }
  }

  onSubmit(form: FormGroup) {
   
    if (form.valid) {
      const {
        FirstName,
        LastName,
        EMail,
        Age        
      } = form.value;
      const user = new User(
        FirstName,
        LastName,
        EMail,
        Age
      );
      this.change.emit(user);
      console.log(user);
    } else {
      [
        'FirstName',
        'LastName',
        'EMail',
        'Age'
      ].forEach((key: string) => {
        console.log(form.get(key).errors);
        form.get(key).markAsTouched();

      })
    }

  }

}
