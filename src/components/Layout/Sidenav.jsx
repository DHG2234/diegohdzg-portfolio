import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

import resume from "/DiegoHdzG_CV_Eng.pdf.pdf";
import portfolio from "/DiegoHernándezGarcía_Portfolio_Eng.pdf"
import { sidenav_btn } from "@components/constants.js";

const Navbtn = ({ href, active_target, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
    target={active_target ? "_blank" : ""}
    rel={active_target ? "noopener noreferrer" : ""}
  >
    {children}
  </a>
);

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <>
      {/* Botón hamburguesa solo visible en móviles */}
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
        size={25}
      />

      {/* Menú móvil desplegable */}
      {nav && (
        <nav className="fixed w-full h-full bg-white/90 flex flex-col justify-center items-center z-20">
          {sidenav_btn.map((data) => {
            const Icon = data.icon;
            return (
              <Navbtn key={data.text} href={data.ref} onClick={handleNav}>
                <Icon size={20} />
                <span className="pl-4">{data.text}</span>
              </Navbtn>
            );
          })}
          <Navbtn
            href={resume}
            active_target={true}
            onClick={handleNav}
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </Navbtn>
          <Navbtn
            href={portfolio}
            active_target={true}
            onClick={handleNav}
          >
            <BsPerson size={20} />
            <span className="pl-4">Portfolio</span>
          </Navbtn>
        </nav>
      )}

      {/* Menú lateral para escritorio */}
      <nav className="hidden md:block fixed top-[25%] z-10">
        {sidenav_btn.map((data) => {
          const Icon = data.icon;
          return (
            <Navbtn key={data.text} href={data.ref}>
              <div className="h-5 w-5 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <span className="pl-2">{data.text}</span>
            </Navbtn>
          );
        })}
        <Navbtn href={resume} active_target={true}>
          <div className="h-5 w-5 flex items-center justify-center">
            <BsPerson size={20} />
          </div>
          <span className="pl-2">Resume</span>
        </Navbtn>
        <Navbtn href={portfolio} active_target={true}>
          <div className="h-5 w-5 flex items-center justify-center">
            <BsPerson size={20} />
          </div>
          <span className="pl-2">Portfolio</span>
        </Navbtn>
      </nav>
    </>
  );
};

export default Sidenav;
