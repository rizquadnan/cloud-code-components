import {
  MdSave,
  MdAdd,
  MdDelete,
  MdPlayArrow,
  MdStop,
  MdFastForward,
} from "react-icons/md";

const icons = [
  { key: "save", ariaLabel: "Save notebook", icon: MdSave },
  { key: "save", ariaLabel: "Add notebook cell", icon: MdAdd },
  { key: "save", ariaLabel: "Delete notebook cell", icon: MdDelete },
  { key: "save", ariaLabel: "Run notebook cell", icon: MdPlayArrow },
  { key: "save", ariaLabel: "Stop running notebook cell", icon: MdStop },
  { key: "save", ariaLabel: "Run all notebook cell", icon: MdFastForward },
];

export default icons;
