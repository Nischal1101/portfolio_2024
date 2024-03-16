import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["NodeJs", "ReactJs", "Postgresql", "ExpressJs"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col-reverse items-center gap-8 mt-12  lg:flex-row-reverse lg:justify-around"
        name="home"
      >
        <div className="left text-center flex flex-col gap-2 lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl">Hi, I&apos;m Nischal</h1>
          <h1 className="text-3xl lg:text-4xl">
            I work with <span className="text-teal-400" ref={el} />
          </h1>
        </div>
        <div className="blob mt-14"></div>
      </div>
      <div className="flex flex-row gap-4 justify-center mt-6">
        <FaGithub className="w-6 h-6" />
        <FaXTwitter className="w-6 h-6" />
        <FaLinkedinIn className="w-6 h-6" />
        <FaInstagram className="w-6 h-6" />
      </div>
      <div className="mt-9 flex justify-center items-center gap-3">
        <p className="text-xl">Scroll down</p>
        <p className="downArrow animate-bounce">
          <FaAngleDoubleDown className="text-xl text-teal-600 " />
        </p>
      </div>
    </>
  );
};

export default Home;
