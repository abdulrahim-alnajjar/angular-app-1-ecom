import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Input() numOfProducts: number;

  @Output()
  changedAvilabilitySelector: EventEmitter<string> = new EventEmitter<string>();

  selector: string = 'all';

  changedSelector() {
    this.changedAvilabilitySelector.emit(this.selector);
  }
}
