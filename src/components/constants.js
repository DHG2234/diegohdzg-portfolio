import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

export const sidenav_btn = [
  {
    ref: "#main",
    text: "Home",
    icon: AiOutlineHome,
  },
  {
    ref: "#work",
    text: "Work",
    icon: GrProjects,
  },
  {
    ref: "#projects",
    text: "Projects",
    icon: AiOutlineProject,
  },
  {
    ref: "#contact",
    text: "Contacts",
    icon: AiOutlineMail,
  },
];
