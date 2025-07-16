import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PopUp  = ({
  project,
  onClose,
  onPrev,
  onNext
}) => {
  if (!project) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md z-50 flex justify-center items-center">
      {/* Contenedor scrollable */}
      <div className="relative max-w-4xl w-[90%] max-h-[90vh] overflow-y-auto bg-black/70 p-6 rounded-lg shadow-xl text-white">

        {/* Botón cerrar */}
        <button onClick={onClose} className="absolute top-4 left-4 text-white text-2xl z-50">
          <FaTimes />
        </button>

        {/* Botón izquierdo */}
        <button onClick={onPrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl z-50">
          <FaArrowLeft />
        </button>

        {/* Botón derecho */}
        <button onClick={onNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl z-50">
          <FaArrowRight />
        </button>

        {/* Contenido */}
        <div className="text-center">
          <h2 className="title text-3xl mb-2">{project.title}</h2>
          <p className="text text-lg mb-4">{project.software}</p>
          <p className="text text-base mb-4">{project.description1}</p>
          <img src={project.image} alt={project.title} className="w-full my-4 rounded-md" />
          <p className="text text-base mb-4">{project.description2}</p>
          <div className="aspect-video w-full my-4">
            <iframe
              className="w-full h-full rounded-md"
              src={project.videoUrl}
              title={project.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp