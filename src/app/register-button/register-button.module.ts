import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterButtonRoutingModule } from "./register-button-routing.module";
import { MaterialModule } from "../material-module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterButtonRoutingModule.components],
  imports: [
    CommonModule,
    RegisterButtonRoutingModule,
    MaterialModule,
    FormsModule,
  ],
})
export class RegisterButtonModule {}
