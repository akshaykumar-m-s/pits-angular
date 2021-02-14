import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("src/app/register-button/register-button.module").then(
        (m) => m.RegisterButtonModule
      ),
  },
  {
    path: "register-page",
    loadChildren: () =>
      import("src/app/register-user/register-user.module").then(
        (m) => m.RegisterUserModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
