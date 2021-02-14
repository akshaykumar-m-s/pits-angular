import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterButtonRoutingModule } from "./register-button-routing.module";
import { MaterialModule } from "../material-module";

@NgModule({
  declarations: [RegisterButtonRoutingModule.components],
  imports: [CommonModule, RegisterButtonRoutingModule, MaterialModule],
})
export class RegisterButtonModule {}
