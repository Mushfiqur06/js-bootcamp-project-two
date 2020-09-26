import { create } from "./../../helper";

export default function input(props) {
  let inp = null;
  switch (props.type) {
    case "INPUT":
      inp = create("input");
      inp.type = props.attr.type;
      inp.placeholder = props.attr.placeholder;
      inp.className = props.attr.className;
      inp.name = props.attr.name;
      inp.required = props.attr.required;
      return inp;
    case "DROPDOWN":
      break;
    case "CHECKBOX":
      break;
    default:
      console.log("Input Default");
  }
}
