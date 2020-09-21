class Contacts {
  constructor() {
    this.contactList = [];
  }
  createContact(contact) {
    this.contactList.push(contact);
  }

  deleteContact(id) {
    let index = this.getIndex(id);
    this.contactList.splice(index, 1);
  }
  getContact() {
    return this.contactList;
  }
  getSingleContact(id) {
    let index = this.getIndex(id);
    return this.contactList[index];
  }

  updateContact(oldContact, changeContact) {
    let index = this.getIndex(oldContact.id);
    for (let i in changeContact) {
      this.contactList[index][i] = changeContact;
    }
  }

  getIndex(id) {
    let index = this.contactList.findIndex((c) => c.id === id);
    return index;
  }
}

export default Contacts;
