const contactList = [];

export function createContact(contact) {
  contactList.push(contact);
}

export function deleteContact(id) {
  let index = getIndex(id);
  contactList.splice(index, 1);
}

export function getContact() {
  return contactList;
}

export function getSingleContact(id) {
  let index = getIndex(id);
  return contactList[index];
}

export function updateContact(oldContact, changeContact) {
  let index = getIndex(oldContact.id);
  for (let i in changeContact) {
    contactList[index][i] = changeContact;
  }
}

export function getIndex(id) {
  let index = contactList.findIndex((c) => c.id === id);
  return index;
}
