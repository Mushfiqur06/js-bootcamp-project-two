import { getID } from "./helper";
import { renderContactList } from "./view/viewData";
import Form from "./view/contactForm/index";

const root = getID("root");
let mode = "list";

let newBtn = getID("newContact");
let ouput = getID("output");

window.onload = function () {
  render();
  newBtn.addEventListener("click", function () {
    if (mode === "list") {
      mode = "form";
      newBtn.innerHTML = "Show All Contact";
      render();
    } else if (mode === "form") {
      mode = "list";
      newBtn.innerHTML = "Create New Contact";
      render();
    }
  });
};

function render() {
  if (mode === "list") {
    ouput.appendChild(renderContactList());
  } else if (mode === "form") {
    let form = Form();
    ouput.append(form);
  }
}
