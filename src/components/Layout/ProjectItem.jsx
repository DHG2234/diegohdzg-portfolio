const ProjectItem = ({ img, title, software }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full overflow-hidden shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="title text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text pb-4 pt-2 text-white text-center">
          {software}
          </p>
      </div>
    </div>
  );
};

export default ProjectItem;
