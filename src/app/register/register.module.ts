import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutes } from './register.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutes
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
