import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  formStepper: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formStepper = this.fb.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required]
    });
  }
}
