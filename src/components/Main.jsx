import React from 'react'
import {FaGithub, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import { FaGithubAlt, FaSquareGithub } from 'react-icons/fa6'
import {TypeAnimation} from 'react-type-animation'
import FotoImg from '../assets/DIEGO.jpg'
const Main = () => {
  return (
    <div id='main'>
      <img src="" alt="" />
        {/* Imagen de fondo */}
        <img className='w-full h-screen object-cover object-left scale-x-[-1' src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         {/* Capa semitransparente para mejor contraste */}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
            <div className="flex flex-col items-center pb-6">
              <div className="rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-white shadow-lg">
                <img
                  src={FotoImg}
                  alt="Diego Hernández"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Diego Hernández García</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm
                <TypeAnimation
                sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'a son',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a brother',
                        1000,
                        'a student',
                        1000,
                        'a developer',
                        1000,
                        'a coder',
                        1000,
                        'a gamer',
                        1000,
                        'a videogame programming engineer',
                        1000,
                        'better than yesterday, but not as good as tomorrow',
                        1000,
                        'the future pirate king!',
                        1000
                    ]}
                    wrapper="div"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '5px'}}
                    repeat={Infinity}
                    cursor={true}
                />
            </h2>
            <div className='flex justify-between pt-6 max-w-[100px] w-full'>
              <a
                href="https://www.youtube.com/@Asrat_DHG_IPV" // <-- Cambia por tu URL real
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className='cursor-pointer hover:text-red-600 transition' size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/diego-hern%C3%A1ndez-garc%C3%ADa-944228287?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Bo0pz9FnRCm%2Bn8oozHLTBQ%3D%3D" // <-- Cambia por tu URL real
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className='cursor-pointer hover:text-blue-600 transition' size={20} />
              </a>
              <a
                href="https://github.com/DHG2234" // <-- Cambia por tu URL real
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className='cursor-pointer hover:text-red-600 transition' size={20} />
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main