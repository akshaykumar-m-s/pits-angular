import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterButtonComponent } from "./register-button.component";

const routes: Routes = [
  {
    path: "register",
    component: RegisterButtonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterButtonRoutingModule {
  static components = [RegisterButtonComponent];
}
