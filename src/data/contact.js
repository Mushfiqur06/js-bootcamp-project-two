import { v4 as uuidv4 } from "uuid";

class Conctact {
  constructor({ name = null, phone = null, email = null, favourite = false }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.favourite = favourite;
    this.id = uuidv4();
  }

  print() {
    console.log(this);
  }
}

export default Conctact;
