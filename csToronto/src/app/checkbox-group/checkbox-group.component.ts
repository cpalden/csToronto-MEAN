import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./checkbox-group.component.css'],
  // finding parent by class-interface, https://angular.io/guide/dependency-injection-in-action.
  // Limiting provider scope with component.
  providers: [
    { // NG_VALUE_ACCESSOR is the provider's class-interface token. The forwardRef breaks the circular reference
      // you just created by having the CheckboxGroupComponent refer to itself.
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
  // To register our value accessor with Angular, we extend NG_VALUE_ACCESSOR with our component:
})
// about control value accessor 'https://angular.io/api/forms/ControlValueAccessor'.
export class CheckboxGroupComponent implements ControlValueAccessor {
    private _model: any;
    private onChange: (m: any) => void;
    private onTouched: (m: any) => void;
    get model() {
        return this._model;
    }
    writeValue(value: any): void {
        this._model = value;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    // _model is used to store internal value. set() is a helper method for setting the initial value.
    set(value: any) {
        this._model = value;
        this.onChange(this._model);
    }
    // addOrRemove method is called when our child checkbox changes its selection.
    // If the checkbox’s value is already in model then remove it, otherwise add it to our _model.
    addOrRemove(value: any) {
      if (this.contains(value)) {
        this.remove(value);
      } else {
        this.add(value);
      }
    }
    // The contains() methods just verifies if value is in the model:
    contains(value: any): boolean {
      if (this._model instanceof Array) {
         return this._model.indexOf(value) > -1;
      } else if (!!this._model) {
         return this._model === value;
      }
      return false;
   }
   private add(value: any) {
    if (!this.contains(value)) {
       if (this._model instanceof Array) {
           this._model.push(value);
       } else {
           this._model = [value];
       }
       this.onChange(this._model);
    }
  }

  private remove(value: any) {
    const index = this._model.indexOf(value);
    if (!this._model || index < 0) {
       return;
    }
    this._model.splice(index, 1);
    this.onChange(this._model);
  }
}
