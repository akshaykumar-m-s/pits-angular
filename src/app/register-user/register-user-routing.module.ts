import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { UserInfoComponent } from "./user-info/user-info.component";

const routes: Routes = [
  {
    path: "",
    component: RegistrationFormComponent,
  },
  {
    path: "user",
    component: UserInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterUserRoutingModule {
  static components = [RegistrationFormComponent, UserInfoComponent];
}
