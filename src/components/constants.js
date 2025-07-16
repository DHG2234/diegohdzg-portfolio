import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

import PixelAdventureImg from "/PixelAdventure.png";
import MegaDungeonImg from "/MegaDungeon.png";
import FightGameImg from "/FightGame.png";
import MazeEscapeImg from "/MazeEscape.png";
import SmokePortalImg from "/SmokePortal.png";
import PoliceManImg from "/PoliceMan.png";

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

export const projects = [
  {
    id: 1,
    title: "Pixel Adventure",
    software: "Unity",
    description1: "Descripción inicial del proyecto.",
    image: PixelAdventureImg,
    description2: "Detalles adicionales sobre cómo se desarrolló.",
    videoUrl: "https://www.youtube.com/live/NPzlWP3bPeg?si=f559NGMLNykd8yyY",
  },
  {
    id: 2,
    title: "Fight Game",
    software: "Unreal Engine 5",
    description1: "Descripción inicial del proyecto.",
    image: FightGameImg,
    description2: "Detalles adicionales sobre cómo se desarrolló.",
    videoUrl: "https://www.youtube.com/live/NPzlWP3bPeg?si=f559NGMLNykd8yyY",
  },
  {
    id: 3,
    title: "Maze Escape",
    software: "Unreal Engine 5",
    description1: "Descripción inicial del proyecto.",
    image: MazeEscapeImg,
    description2: "Detalles adicionales sobre cómo se desarrolló.",
    videoUrl: "https://www.youtube.com/live/NPzlWP3bPeg?si=f559NGMLNykd8yyY",
  },
  {
    id: 4,
    title: "Mega Dungeon",
    software: "Unreal Engine 5",
    description1: "Descripción inicial del proyecto.",
    image: MegaDungeonImg,
    description2: "Detalles adicionales sobre cómo se desarrolló.",
    videoUrl: "https://www.youtube.com/live/NPzlWP3bPeg?si=f559NGMLNykd8yyY",
  },
  {
    id: 5,
    title: "Police Man",
    software: "Unity",
    description1: "Descripción inicial del proyecto.",
    image: PoliceManImg,
    description2: "Detalles adicionales sobre cómo se desarrolló.",
    videoUrl: "https://www.youtube.com/live/NPzlWP3bPeg?si=f559NGMLNykd8yyY",
  },
  {
    id: 6,
    title: "Smoke Portal",
    software: "Unreal Engine 5",
    description1: "Descripción inicial del proyecto.",
    image: SmokePortalImg,
    description2: "Detalles adicionales sobre cómo se desarrolló.",
    videoUrl: "https://www.youtube.com/live/NPzlWP3bPeg?si=f559NGMLNykd8yyY",
  },
];

