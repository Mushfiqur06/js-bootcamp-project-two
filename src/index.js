import Contact from "./data/contact";
import Contacts from "./data/contacts";
import contactUL from "./view/contact/contactUl";
import { getID } from "./helper";

const data = [
  { name: "Primeasia", phone: "8578495745" },
  { name: "Primeasia One", phone: "8578495745" },
  { name: "Primeasia Two", phone: "8578495745" },
  { name: "Primeasia Three", phone: "8578495745" },
];
const root = getID("root");
let UL = contactUL(data);
console.log(UL);
root.append(UL);
// let contacts = new Contacts({});
// contacts.createContact(new Contact({}));
// contacts.createContact(new Contact({}));
// contacts.createContact(new Contact({}));
// contacts.createContact(new Contact({}));
// const showContactList = contacts.getContact();
// console.log(showContactList);

//MVC -- Model View Controller
//Model -- working with Data
//View -- Graphical User Interface
//Controller -- An Adapter to adapt model and view

//GUI + DATA
