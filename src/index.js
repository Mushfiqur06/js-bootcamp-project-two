import Contact from "./contact";
import Contacts from "./contacts";

let contacts = new Contacts({});
contacts.createContact(new Contact({}));
contacts.createContact(new Contact({}));
contacts.createContact(new Contact({}));
contacts.createContact(new Contact({}));
const showContactList = contacts.getContact();
console.log(showContactList);
