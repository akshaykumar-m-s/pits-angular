import { Component, OnInit } from "@angular/core";
import { UserInfo } from "src/app/model";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"],
})
export class UserInfoComponent implements OnInit {
  userInfo: UserInfo;
  url: any = "";
  interests = "";
  constructor() {}

  /**
   * On Init
   */
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("form-data"));
    if (!!this.userInfo && !!this.userInfo.photo) {
      this.url = this.userInfo.photo;
    }
    const dataArray = [];
    if (!!this.userInfo && !!this.userInfo.interests.length) {
      this.userInfo.interests.forEach((element) => {
        dataArray.push(element.name);
      });
    }
    this.interests = dataArray.toString();
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
      };
    }
  }
}
