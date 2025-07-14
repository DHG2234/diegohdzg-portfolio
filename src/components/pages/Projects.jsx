import React from "react";
import { ProjectItem } from "@layout";
import PixelAdventureImg from "/PixelAdventure.png";
import MegaDungeonImg from "/MegaDungeon.png";
import FightGameImg from "/FightGame.png";
import MazeEscapeImg from "/MazeEscape.png";
import SmokePortalImg from "/SmokePortal.png";
import PoliceManImg from "/PoliceMan.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="title text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text text-center py-8 break-words">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={PixelAdventureImg} title="Pixel Adventure" software="Unity" />
        <ProjectItem img={MegaDungeonImg} title="Mega Dungeon" software="Unreal Engine 5" />
        <ProjectItem img={FightGameImg} title="Fight Game" software="Unreal Engine 5"/>
        <ProjectItem img={MazeEscapeImg} title="Maze Escape" software="Unreal Engine 5"/>
        <ProjectItem img={PoliceManImg} title="Police Man" software="Unity"/>
        <ProjectItem img={SmokePortalImg} title="Smoke Portal" software="Unreal Engine 5"/>
      </div>
    </div>
  );
};

export default Projects;
