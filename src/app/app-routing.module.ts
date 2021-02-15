import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/register",
  },
  {
    path: "register",
    loadChildren: () =>
      import("../app/register-button/register-button.module").then(
        (m) => m.RegisterButtonModule
      ),
  },
  {
    path: "registration",
    loadChildren: () =>
      import("../app/register-user/register-user.module").then(
        (m) => m.RegisterUserModule
      ),
  },
  { path: "**", redirectTo: "/register" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
