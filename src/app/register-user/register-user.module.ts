import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterUserRoutingModule } from "./register-user-routing.module";
import { MaterialModule } from "../material-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterUserRoutingModule.components],
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RegisterUserModule {}
