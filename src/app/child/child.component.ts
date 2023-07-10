import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {

  @Input()items = [];

  @Output() selectedItemEmitter = new EventEmitter();

  selectItem(item) {
    this.selectedItemEmitter.emit(item);
  }
}
