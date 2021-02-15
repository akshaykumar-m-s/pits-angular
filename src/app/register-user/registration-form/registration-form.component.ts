import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatSelectChange } from "@angular/material/select";
import { Router } from "@angular/router";
import countryList from "../../../app/countrylist.json";
import { Interest, UserInfo } from "../../../app/model";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"],
})
export class RegistrationFormComponent implements OnInit {
  url: any = "";
  interestsArray: Interest[] = [
    { name: "Football" },
    { name: "Cricket" },
    { name: "Hockey" },
  ];
  readonly separatorKeysCodes: number[] = [13, 188];
  checked = false;
  value = 16;
  register: UserInfo;
  registerForm: FormGroup;
  hasFormErrors = false;
  countryJson = countryList;
  states: string[];

  constructor(private fb: FormBuilder, private router: Router) {
    this.register = new UserInfo();
  }

  /**
   * On Init
   */
  ngOnInit() {
    const formData = JSON.parse(localStorage.getItem("form-data"));
    this.register = !!formData ? formData : new UserInfo();

    if (!!this.register && !!this.register.photo) {
      this.url = this.register.photo;
    }
    if (!!this.register && !!this.register.country) {
      const x = this.countryJson.find(
        (i) => i.country.toLowerCase() === this.register.country.toLowerCase()
      );
      this.states = x.states;
    }
    if (!!this.register && !!this.register.interests) {
      this.interestsArray = this.register.interests;
    }
    this.initForm();
  }

  /**
   * Form Initializer
   */
  initForm() {
    this.registerForm = this.fb.group({
      photo: [""],
      firstName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[A-Z][a-zA-Z ]{1,20}$"),
        ]),
      ],
      lastName: ["", Validators.compose([Validators.required])],
      age: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      tel: ["", Validators.compose([Validators.required])],
      state: ["", Validators.compose([Validators.required])],
      country: ["", Validators.compose([Validators.required])],
      address: ["", Validators.compose([Validators.required])],
      address1: ["", Validators.compose([Validators.required])],
      address2: [""],
      interests: [
        this.interestsArray,
        Validators.compose([Validators.required]),
      ],
      subscription: [false],
    });
  }

  /**
   * Triggers on Choose file click
   * @param event: File Change Event
   */
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
        this.registerForm.get("photo").setValue(this.url);
      };
    }
  }

  /**
   * To add the interest to Array
   * @param event: MatChipInputEvent
   */
  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    // Add interest
    if ((value || "").trim()) {
      this.interestsArray.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  /**
   * To remove the interest from Array
   * @param value:  Interest Model
   */
  remove(value: Interest) {
    const index = this.interestsArray.indexOf(value);

    if (index >= 0) {
      this.interestsArray.splice(index, 1);
    }
  }

  /**
   * Selection Change of Country
   * @param event: MatSelectChange
   */
  countryChange(event: MatSelectChange) {
    const x = this.countryJson.find(
      (i) => i.country.toLowerCase() === event.value.toLowerCase()
    );
    this.states = x.states;
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.registerForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  /**
   * On Submit =>  triggers save form if valid
   */
  onSubmit() {
    this.hasFormErrors = false;
    const controls = this.registerForm.controls;

    /** check form */
    if (this.registerForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );

      this.hasFormErrors = true;
      return;
    }
    localStorage.setItem("form-data", JSON.stringify(this.registerForm.value));
    this.router.navigate(["/registration/user"]);
  }
}
