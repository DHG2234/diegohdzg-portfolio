import { PopUp  } from "@layout";

import { useState } from 'react';
import { projects } from "@components/constants.js";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMoreInfo = (index) => setActiveIndex(index);
  const handleClose = () => setActiveIndex(null);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <div id='projects' className="p-4">
      <h2 className="title text-3xl text-center mb-6">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div key={proj.id} className="relative group">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
              <h3 className="title text-xl">{proj.title}</h3>
              <p className="text text-sm mb-2">{proj.software}</p>
              <button onClick={() => handleMoreInfo(index)} className="text-sm bg-white text-black px-3 py-1 rounded">
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PopUp  */}
      {activeIndex !== null && (
        <PopUp
          project={projects[activeIndex]}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Projects
