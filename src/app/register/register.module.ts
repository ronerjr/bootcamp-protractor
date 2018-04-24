import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutes } from './register.routing';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutes
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
