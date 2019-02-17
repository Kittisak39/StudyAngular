import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private FormBulid: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.formGroup = this.FormBulid.group({
      FirstName: this.FormBulid.control(''), //เขียนแบบเต็ม
      LastName: [''], //เขียนแบบย่อ
      EMail: [''],
      Age: ['']
    })
    this.FormBulid
  }

  onSubmit(form:FormGroup){
    const {FirstName, LastName, EMail, Age} = form.value;
    const user = new User(FirstName, LastName, EMail, Age);
    console.log(user);
  }

}
