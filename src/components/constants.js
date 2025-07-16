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
import MEImg2 from "/IAandIMC.png"

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
    text: "Contact",
    icon: AiOutlineMail,
  },
];

export const projects = [
  {
    id: 1,
    title: "Pixel Adventure",
    software: "Unity",
    description1: `Genre: survival horror, FPS.
    Gameplay: escape a maze while being chased by monsters; to get out, you need to find all the keys before they catch you, you can stop them for a short time by shooting, but be careful — your ammo is limited.
    Platform: PC.
    Mode: single player.`,
    image: PixelAdventureImg,
    description2: `I created the control representations that the player will use in the game, each tied to specific actions when pressed or held:
    - Aim
    - Look up / down
    - Look left / right
    - Move forward / back
    - Move left / right
    - Shoot
    - Run`,
    image2: MEImg2,
    videoUrl: "https://www.youtube.com/embed/NPzlWP3bPeg?si=Y9LhGvo8SWSF5p8I",
  },
  {
    id: 2,
    title: "Fight Game",
    software: "Unreal Engine 5",
    description1: `Genre: survival horror, FPS.
    Gameplay: escape a maze while being chased by monsters; to get out, you need to find all the keys before they catch you, you can stop them for a short time by shooting, but be careful — your ammo is limited.
    Platform: PC.
    Mode: single player.`,
    image: FightGameImg,
    description2: `I created the control representations that the player will use in the game, each tied to specific actions when pressed or held:
    - Aim
    - Look up / down
    - Look left / right
    - Move forward / back
    - Move left / right
    - Shoot
    - Run`,
    image2: MEImg2,
    videoUrl: "https://www.youtube.com/embed/NPzlWP3bPeg?si=Y9LhGvo8SWSF5p8I",
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
    videoUrl: "https://www.youtube.com/embed/NPzlWP3bPeg?si=Y9LhGvo8SWSF5p8I",
  },
  {
    id: 4,
    title: "Mega Dungeon",
    software: "Unreal Engine 5",
    description1: `Genre: survival horror, FPS.
    Gameplay: escape a maze while being chased by monsters; to get out, you need to find all the keys before they catch you, you can stop them for a short time by shooting, but be careful — your ammo is limited.
    Platform: PC.
    Mode: single player.`,
    image: MegaDungeonImg,
    description2: `I created the control representations that the player will use in the game, each tied to specific actions when pressed or held:
    - Aim
    - Look up / down
    - Look left / right
    - Move forward / back
    - Move left / right
    - Shoot
    - Run`,
    image2: MEImg2,
    videoUrl: "https://www.youtube.com/embed/NPzlWP3bPeg?si=Y9LhGvo8SWSF5p8I",
  },
  {
    id: 5,
    title: "Police Man",
    software: "Unity",
    description1: `Genre: survival horror, FPS.
    Gameplay: escape a maze while being chased by monsters; to get out, you need to find all the keys before they catch you, you can stop them for a short time by shooting, but be careful — your ammo is limited.
    Platform: PC.
    Mode: single player.`,
    image: PoliceManImg,
    description2: `I created the control representations that the player will use in the game, each tied to specific actions when pressed or held:
    - Aim
    - Look up / down
    - Look left / right
    - Move forward / back
    - Move left / right
    - Shoot
    - Run`,
    image2: MEImg2,
    videoUrl: "https://www.youtube.com/embed/NPzlWP3bPeg?si=Y9LhGvo8SWSF5p8I",
  },
  {
    id: 6,
    title: "Smoke Portal",
    software: "Unreal Engine 5",
    description1: `Genre: survival horror, FPS.
    Gameplay: escape a maze while being chased by monsters; to get out, you need to find all the keys before they catch you, you can stop them for a short time by shooting, but be careful — your ammo is limited.
    Platform: PC.
    Mode: single player.`,
    image: SmokePortalImg,
    description2: `I created the control representations that the player will use in the game, each tied to specific actions when pressed or held:
    - Aim
    - Look up / down
    - Look left / right
    - Move forward / back
    - Move left / right
    - Shoot
    - Run`,
    image2: MEImg2,
    videoUrl: "https://www.youtube.com/embed/NPzlWP3bPeg?si=Y9LhGvo8SWSF5p8I",
  },
];

