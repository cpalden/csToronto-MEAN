import { Component, Input, Host } from '@angular/core';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent {
  // @Input is a decorator. It that allow us to pass data from the parent to child.
  @Input() value: any;
  // @Host decorator allows us to get a reference of our parent CheckboxGroupElement.
  constructor(@Host() private _checkboxGroup: CheckboxGroupComponent) { }

  toggleCheck() {
    this._checkboxGroup.addOrRemove(this.value);
  }

  isChecked() {
    return this._checkboxGroup.contains(this.value);
  }
}
