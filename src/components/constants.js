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
    text: "Demo Reel",
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
    description1: `Genre: adventure, survival, top-down.
    - Gameplay: move through the map, find and defeat all
    enemies, reach the boss zone, fight and win.
    - Platform: web.
    - Mode: single player.`,
    image: PixelAdventureImg,
    videoUrl: "https://www.youtube.com/embed/l_Q9PgQ7VeY?si=gp9ibt02Qqd2wuBT",
  },
  {
    id: 2,
    title: "Fight Game",
    software: "Unreal Engine 5",
    description1: `- Genre: fighting, local co-op.
    - Gameplay: move around the ring, jump, punch, block,
    and secure victory.
    - Platform: PC.
    - Mode: 2 players.`,
    image: FightGameImg,
    videoUrl: "https://www.youtube.com/embed/CwEBmD9Fq-g?si=4OpnS4ftdOgv_cwC",
  },
  {
    id: 3,
    title: "Maze Escape",
    software: "Unreal Engine 5",
    description1: `Genre: survival horror, FPS.
    Gameplay: escape a maze while being chased by monsters; to get out, you need to find all the keys before they catch you, you can stop them for a short time by shooting, but be careful — your ammo is limited.
    Platform: PC.
    Mode: single player.`,
    image: MazeEscapeImg,
    description2: `I created the control representations that the player will use in the game, each tied to specific actions when pressed or held:
    - Aim
    - Look up / down
    - Look left / right
    - Move forward / back
    - Move left / right
    - Shoot
    - Run`,
    image2: MEImg2,
    videoUrl: "https://www.youtube.com/embed/V7hs-Y-FrEM?si=h3gnR1IsAgoqdzV1",
  },
  {
    id: 4,
    title: "Mega Dungeon",
    software: "Unreal Engine 5",
    description1: `- Genre: puzzle, time limit.
    - Gameplay: you must choose the correct movements; the player moves in the selected direction until they can’t move anymore, then continues with the next direction, until they use all their moves or finish the level.
    - Platform: PC.
    - Mode: single player.`,
    image: MegaDungeonImg,
    description2: `In this project, I mainly worked as a QA Tester (Quality Assurance):
    - Art: made sure all assets were inside the project and implemented correctly.
    - Programming: checked if the blueprints worked as expected, found and reported bugs; if my teammate couldn’t fix one, I fixed it myself.
    - SFX: I handled the game sound, created the music from scratch, and for sound effects (win/lose sounds, buttons, character movement) I found them online and edited in FL Studio.`,
    videoUrl: "https://www.youtube.com/embed/wrGY-doEWac?si=LWKHRtM_AWScTorN",
  },
  {
    id: 5,
    title: "Police Man",
    software: "Unity",
    description1: `Model: Policía
    Shader material.
    - Shader material.
    - View-based lighting (light direction stays consistent, e.g., always from top-right, shadows bottom-left).
    - Light rotation settings.
    - Normal maps for light effects (with intensity setting).
    - 12 color options.
    - Inline and outline.
    - Uses ambient occlusion with custom color.`,
    image: PoliceManImg,
    image2: PMImg2,
    videoUrl: "https://www.youtube.com/embed/YabmgYFh4cg?si=msvpFGd0299mOR3F",
  },
  {
    id: 6,
    title: "Smoke Portal",
    software: "Unreal Engine 5",
    description1: `Model: circular plane.
    Spotlight: color, intensity.
    Material:
    Portal inner texture.
    Border motion effect.
    Texture glow speed (pulsating brightness).
    Niagara VFX:
    Border glow intensity.
    Smoke fluid quality.
    Color and number of emissive particles.`,
    image: SmokePortalImg,
    videoUrl: "https://www.youtube.com/embed/u4gcITnwfCw?si=jleGQMq8McLbapTx",
  },
];

