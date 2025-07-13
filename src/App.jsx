import { Sidenav } from "@layout";
import { Contact, Projects, Work, Hero } from "@pages";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <div>
        <Sidenav />
        <Hero />
        <Work />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
