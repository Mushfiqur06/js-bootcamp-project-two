import { getContact } from "./../../data/contacts";
import { create } from "./../../helper";

export function renderContactList() {
  let contactUI = null;
  if (getContact().length > 0) {
    contactUI = create("ul");
    getContact().map((contact) => {
      let contactLi = create("li");
      contactLi.innerText = `${contact.name} - ${contact.phone}`;
      contactUI.append(contactLi);
    });
  } else {
    contactUI = create("p");
    contactUI.innerText = "There is no Contact";
  }
  return contactUI;
}

export function renderFavouriteContactList() {}
