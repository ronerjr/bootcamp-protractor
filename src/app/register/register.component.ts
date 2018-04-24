import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private registerForm: FormGroup;
  private genderOptOutSubs: Subscription;

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      genderOptOut: [false],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.genderOptOutSubs = this.registerForm.controls['genderOptOut'].valueChanges
      .subscribe((value: boolean) => {
        const genderControl = this.registerForm.controls.gender;
        genderControl.setValue(undefined);
        if (genderControl) {
          genderControl.enabled ? genderControl.disable() : genderControl.enable();
        }
      });
  }

  public ngOnDestroy(): void {
    this.genderOptOutSubs && this.genderOptOutSubs.unsubscribe();
  }

  public fieldValue(fieldname: string): any {
    const field: AbstractControl = this.registerForm.controls[fieldname];
    if (field) {
      return field.value;
    }
  }

  public hasError(fieldname: any): boolean {
    const field: AbstractControl = this.registerForm.controls[fieldname];
    if (field && field.errors) {
      return field.touched && field.errors.length != 0;
    }

    return false;
  }
}