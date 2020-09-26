import { create } from "./../../helper";
import { createContact, getContact } from "./../../data/contacts";
import Contact from "./../../data/contact";
import input from "./../input";

export default function Form() {
  const form = create("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let contact = {};
    for (var i = 0; i < e.target.length - 1; i++) {
      contact[e.target[i].name] = e.target[i].value;
    }
    createContact(new Contact(contact));
    form.reset();
    console.log(getContact());
  });
  let nameField = input({
    type: "INPUT",
    attr: {
      type: "text",
      placeholder: "Enter your name",
      className: "form-input",
      name: "name",
      required: true,
    },
  });
  let emailField = input({
    type: "INPUT",
    attr: {
      type: "email",
      placeholder: "Enter your email",
      className: "form-input",
      name: "email",
      required: true,
    },
  });
  let phonelField = input({
    type: "INPUT",
    attr: {
      type: "number",
      placeholder: "Enter your phone",
      className: "form-input",
      name: "phone",
      required: true,
    },
  });

  let submitBtn = create("button", { class: "submitBtn" });
  submitBtn.innerText = "Submit";

  form.append(nameField, emailField, phonelField, submitBtn);

  return form;
}
