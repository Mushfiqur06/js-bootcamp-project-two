import { v4 as uuidv4 } from "uuid";

class Conctact {
  constructor({ name = null, phone = null, email = null }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = uuidv4();
  }

  print() {
    console.log(this);
  }
}

export default Conctact;
