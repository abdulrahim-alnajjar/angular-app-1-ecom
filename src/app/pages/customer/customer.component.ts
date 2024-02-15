import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnInit {
  reactiveForm: FormGroup;
  onSubmit() {
    console.log(this.reactiveForm.controls);
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      memberStatus: new FormGroup({
        gender: new FormControl(),
        status: new FormControl(),
      }),
    });
  }
}
