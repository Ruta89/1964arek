import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-add-pozycje',
  templateUrl: './add-pozycje.component.html',
  styleUrls: ['./add-pozycje.component.scss']
})
export class AddPozycjeComponent implements OnInit {
  formAdd = new FormGroup({});
  userModel = {
    email: 'email@enail.com'
  };
  userFields: Array<FormlyFieldConfig> = [
    {
      key: 'wll',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'wll',
        placeholder: 'wll',
        required: true
      }
    },
    {
      key: 'l1',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'l1',
        placeholder: 'l1',
        required: true
      }
    },
    {
      key: 'nici',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'nici',
        placeholder: 'wlnicil'
      }
    },
    {
      key: 'auf',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'auf',
        placeholder: 'auf'
      }
    },
    {
      key: 'min',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'min',
        placeholder: 'min'
      }
    },
    {
      key: 'szt',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'szt',
        placeholder: 'szt'
      }
    }
  ];
  constructor() {}

  ngOnInit() {}

  submit(user) {
    console.log(user);
    alert(JSON.parse(JSON.stringify(user)));
  }
}
