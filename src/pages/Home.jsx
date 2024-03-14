import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Skills from "./Skills";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import About from "../About";

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
    <section className="px-2 ">
      <div className="flex flex-col-reverse items-center gap-8 mt-12 ">
        <div className="left text-center flex flex-col gap-2">
          <h1 className="text-4xl">Hi, I&apos;m Nischal</h1>
          <h1 className="text-3xl ">
            I work with <span className="text-teal-400" ref={el} />
          </h1>
        </div>
        <div className="blob mt-14"></div>
      </div>
      <div className="flex flex-row gap-4 justify-center mt-6">
        <FaGithub />
        <FaXTwitter />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
      <div className="mt-9 flex justify-center items-center gap-3">
        <p>Scroll down</p>
        <p className="downArrow animate-bounce">
          <FaAngleDoubleDown />
        </p>
      </div>
      <About />
      <Skills />
    </section>
  );
};

export default Home;
