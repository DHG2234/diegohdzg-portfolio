import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";

import { GrProjects } from "react-icons/gr";

import { MdVideoLibrary } from "react-icons/md";

import PixelAdventureImg from "/PixelAdventure.png";
import MegaDungeonImg from "/MegaDungeon.png";
import FightGameImg from "/FightGame.png";
import MazeEscapeImg from "/MazeEscape.png";
import SmokePortalImg from "/SmokePortal.png";
import PoliceManImg from "/PoliceMan.png";
import MEImg2 from "/IAandIMC.png"
import PMImg2 from "/PM2.png"

export const sidenav_btn = [
  {
    ref: "#main",
    text: "Home",
    icon: AiOutlineHome,
  },
  {
    ref: "#demo-reel",
    text: "Reel",
    icon: MdVideoLibrary,
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
    text: "Contact",
    icon: AiOutlineMail,
  },
];

export const projects = [
  {
    id: 1,
    title: "Pixel Adventure",
    software: "Unity",
    description1: "Genre: adventure, survival, top-down.\n" +
    "- Gameplay: move through the map, find and defeat all enemies, reach the boss zone, fight and win.\n"+
    "- Platform: web.\n" +
    "- Mode: single player.",
    image: PixelAdventureImg,
    videoUrl: "https://www.youtube.com/embed/l_Q9PgQ7VeY?si=gp9ibt02Qqd2wuBT",
  },
  {
    id: 2,
    title: "Fight Game",
    software: "Unreal Engine 5",
    description1: "- Genre: fighting, local co-op.\n" +
    "- Gameplay: move around the ring, jump, punch, block, and secure victory.\n" +
    "- Platform: PC.\n" +
    "- Mode: 2 players.",
    image: FightGameImg,
    videoUrl: "https://www.youtube.com/embed/CwEBmD9Fq-g?si=4OpnS4ftdOgv_cwC",
  },
  {
    id: 3,
    title: "Maze Escape",
    software: "Unreal Engine 5",
    description1: "Genre: survival horror, FPS.\n" +
    "Gameplay: escape a maze while being chased by monsters; to get out, you need to find all the keys before they catch you, you can stop them for a short time by shooting, but be careful — your ammo is limited.\n" +
    "Platform: PC.\n" +
    "Mode: single player.",
    image: MazeEscapeImg,
    description2: "I created the control representations that the player will use in the game, each tied to specific actions when pressed or held:\n" +
    "- Aim\n" +
    "- Look up / down\n" +
    "- Look left / right\n" +
    "- Move forward / back\n" +
    "- Move left / right\n" +
    "- Shoot\n" +
    "- Run",
    image2: MEImg2,
    videoUrl: "https://www.youtube.com/embed/V7hs-Y-FrEM?si=h3gnR1IsAgoqdzV1",
  },
  {
    id: 4,
    title: "Mega Dungeon",
    software: "Unreal Engine 5",
    description1: "- Genre: puzzle, time limit.\n" +
    "- Gameplay: you must choose the correct movements; the player moves in the selected direction until they can’t move anymore, then continues with the next direction, until they use all their moves or finish the level.\n" +
    "- Platform: PC.\n" +
    "- Mode: single player.",
    image: MegaDungeonImg,
    description2: "In this project, I mainly worked as a QA Tester (Quality Assurance):\n" +
    "- Art: made sure all assets were inside the project and implemented correctly.\n" +
    "- Programming: checked if the blueprints worked as expected, found and reported bugs; if my teammate couldn’t fix one, I fixed it myself.\n" +
    "- SFX: I handled the game sound, created the music from scratch, and for sound effects (win/lose sounds, buttons, character movement) I found them online and edited in FL Studio.",
    videoUrl: "https://www.youtube.com/embed/wrGY-doEWac?si=LWKHRtM_AWScTorN",
  },
  {
    id: 5,
    title: "Police Man",
    software: "Unity",
    description1: "Model: Policía\n" +
    "Shader material.\n" +
    "- Shader material.\n" +
    "- View-based lighting (light direction stays consistent, e.g., always from top-right, shadows bottom-left).\n" +
    "- Light rotation settings.\n" +
    "- Normal maps for light effects (with intensity setting).\n" +
    "- 12 color options.\n" +
    "- Inline and outline.\n" +
    "- Uses ambient occlusion with custom color.",
    image: PoliceManImg,
    image2: PMImg2,
    videoUrl: "https://www.youtube.com/embed/YabmgYFh4cg?si=msvpFGd0299mOR3F",
  },
  {
    id: 6,
    title: "Smoke Portal",
    software: "Unreal Engine 5",
    description1: "Model: circular plane.\n" +
    "Spotlight: color, intensity.\n" +
    "Material:\n" +
    "- Portal inner texture.\n" +
    "- Border motion effect.\n" +
    "- Texture glow speed (pulsating brightness).\n" +
    "Niagara VFX:\n" +
    "- Border glow intensity.\n" +
    "- Smoke fluid quality.\n" +
    "- Color and number of emissive particles.",
    image: SmokePortalImg,
    videoUrl: "https://www.youtube.com/embed/u4gcITnwfCw?si=jleGQMq8McLbapTx",
  },
];

