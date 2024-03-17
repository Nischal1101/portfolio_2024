import backend from "/public/backend.jpg";
import frontend from "/public/frontend.jpg";
const Projects = () => {
  return (
    <div className="mt-32" name="projects">
      <h1 className="text-7xl lg:text-8xl text-center">Projects</h1>
      <div className="mt-20 grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2 ">
        <a href="https://github.com/Nischal1101/movie-backend.git">
          <div className="card w-80 lg:w-full max-w-[35rem] bg-base-100 shadow-xl image-full">
            <figure>
              <img
                // src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                src={frontend}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Movie Backend</h2>
              <p>Movie backend to power the frontend.</p>
            </div>
          </div>
        </a>
        <a href="https://github.com/Nischal1101/movie-frontend.git">
          <div className="card w-80 lg:w-full max-w-[35rem] bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src={backend}
                // src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Movie Frontend</h2>
              <p>Modern feature rich movie review site.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
