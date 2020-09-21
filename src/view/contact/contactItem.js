import { create } from "./../../helper";

export default function contactLI(props) {
  let li = create("li", { class: "contactItem" });
  let avatar = create("div", { class: "avatar" });
  avatar.innerText = props.avatar;
  let info = create("div", { class: "info" });
  let nameHeading = create("h2");
  nameHeading.innerText = props.name;
  let phone = create("p");
  phone.innerText = props.phone;
  info.append(nameHeading, phone);

  li.append(avatar, info);

  return li;
}
