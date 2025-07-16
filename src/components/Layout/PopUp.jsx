import { useEffect } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const PopUp = ({ project, onClose, onPrev, onNext }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md z-50 flex justify-center items-center pointer-events-auto"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Botón cerrar */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="fixed top-6 left-6 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white text-xl hover:scale-110 hover:shadow-lg hover:shadow-white/30 transition duration-200 ease-in-out backdrop-blur"
        >
          <FaTimes />
        </button>

        {/* Botón izquierda */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="fixed top-1/2 left-4 transform -translate-y-1/2 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white text-xl hover:scale-110 hover:shadow-lg hover:shadow-white/30 transition duration-200 ease-in-out backdrop-blur"
        >
          <FaArrowLeft />
        </button>

        {/* Botón derecha */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="fixed top-1/2 right-4 transform -translate-y-1/2 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white text-xl hover:scale-110 hover:shadow-lg hover:shadow-white/30 transition duration-200 ease-in-out backdrop-blur"
        >
          <FaArrowRight />
        </button>

        {/* Contenedor scrollable */}
        <motion.div
          key="modal"
          className="relative max-w-4xl w-[90%] max-h-[90vh] overflow-y-auto bg-black/70 p-6 rounded-lg shadow-xl text-white"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <h2 className="title text-[2rem] mb-2">{project.title}</h2>

            <p className="text text-[1rem] mb-4">{project.software}</p>

            <p className="text text-[0.95rem] mb-4 text-left">
              {project.description1}
            </p>

            <img
              src={project.image}
              alt={project.title}
              className="w-full my-4 rounded-md"
            />

            {project.description2 && (
              <p className="text text-[0.95rem] mb-4 text-left">
                {project.description2}
              </p>
            )}

            {project.image2 && (
              <img
                src={project.image2}
                alt={project.title}
                className="w-full my-4 rounded-md"
              />
            )}

            {project.videoUrl && (
              <div className="aspect-video w-full my-4">
                <iframe
                  className="w-full h-full rounded-md"
                  src={project.videoUrl}
                  title={project.title}
                  allowFullScreen
                ></iframe>
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUp;