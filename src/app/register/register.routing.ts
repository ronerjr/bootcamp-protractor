import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RegisterComponent },
];

export const RegisterRoutes = RouterModule.forChild(routes);
