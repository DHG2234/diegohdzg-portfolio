import React from "react";
import { ProjectItem } from "@layout";
// import PixelAdventureImg from "../assets/PixelAdventure.png";
// import MegaDungeonImg from "../assets/MegaDungeon.png";
// import FightGameImg from "../assets/FightGame.png";
// import MazeEscapeImg from "../assets/MazeEscape.png";
// import SmokePortalImg from "../assets/SmokePortal.png";
// import PoliceManImg from "../assets/PoliceMan.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 break-words">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {/* <ProjectItem img={PixelAdventureImg} title="Pixel Adventure" />
        <ProjectItem img={MegaDungeonImg} title="Mega Dungeon" />
        <ProjectItem img={FightGameImg} title="Fight Game" />
        <ProjectItem img={MazeEscapeImg} title="Maze Escape" />
        <ProjectItem img={PoliceManImg} title="Police Man" />
        <ProjectItem img={SmokePortalImg} title="Smoke Portal" /> */}
      </div>
    </div>
  );
};

export default Projects;
