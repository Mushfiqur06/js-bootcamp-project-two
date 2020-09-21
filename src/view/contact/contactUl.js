import { create } from "./../../helper";
import contactLI from "./contactItem";

export default function contactUL(props) {
  console.log(props);
  const ul = create("ul", { class: "contactList" });
  props.map((singleContact) => {
    let item = contactLI({
      name: singleContact.name,
      phone: singleContact.phone,
      avatar: singleContact.name.charAt(0).toUpperCase(),
    });
    ul.append(item);
  });

  return ul;
}
