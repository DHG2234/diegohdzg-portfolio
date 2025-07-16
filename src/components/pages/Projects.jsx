import { projects } from "@components/constants.js";

const Projects = ({ onOpenPopUp }) => {
  return (
    <div id="projects" className="p-4">
      <h2 className="title text-4xl font-bold text-center text-[#001b5e] py-4">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-[1040px] m-auto py-4">
        {projects.map((proj, index) => (
          <div
            key={proj.id}
            onClick={() => onOpenPopUp(index)}
            className="relative group cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white rounded-lg">
              <h3 className="title text-xl">{proj.title}</h3>
              <p className="text text-sm">{proj.software}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;