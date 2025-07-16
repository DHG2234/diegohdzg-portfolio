import { useState } from "react";
import { Sidenav, PopUp } from "@layout";
import { Contact, Projects, Work, Hero, DemoReel } from "@pages";
import { projects } from "@components/constants.js";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpen = (index) => setActiveIndex(index);
  const handleClose = () => setActiveIndex(null);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );

  const isPopUpOpen = activeIndex !== null;

  return (
    <div className={`w-full overflow-x-hidden ${isPopUpOpen ? 'pointer-events-none overflow-hidden' : ''}`}>
      <div className="pointer-events-auto">
        <Sidenav isPopUpOpen={isPopUpOpen} />
        <Hero />
        <DemoReel />
        <Work />
        <Projects onOpenPopUp={handleOpen} />
        <Contact />
        {isPopUpOpen && (
          <PopUp
            project={projects[activeIndex]}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}

export default App;
