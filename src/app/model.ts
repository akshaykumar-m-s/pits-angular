export interface Interest {
  name: string;
}

export class UserInfo {
  photo = "";
  firstName = "";
  lastName = "";
  age = 0;
  email = "";
  tel = "";
  state = "";
  country = "";
  address = "";
  address1 = "";
  address2 = "";
  interests: Interest[];
  subscription = false;
}
