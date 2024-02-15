import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() searching: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchingForm') searchingForm: NgForm;
  onSubmit() {
    this.searching.emit(this.searchingForm.value.searchValue);
  }
}
