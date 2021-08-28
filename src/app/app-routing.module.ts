import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UsersComponent } from './users/users.component';
import { GuardsGuard, TestCanDeactivate, TestResolve } from './guards.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersComponent,

    canLoad: [GuardsGuard],
  },

  {
    path: 'users/add',
    component: AddEditUserComponent,
  },
  {
    path: 'users/:id',
    component: AddEditUserComponent,
    canDeactivate: [TestCanDeactivate],
    resolve: {
      resolvedData: TestResolve,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
