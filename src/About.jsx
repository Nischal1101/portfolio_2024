import computer from "/computer.png";

const About = () => {
  return (
    <div className="mt-24  p-4" name="about">
      <div className="mt-10 flex flex-col text-center gap-4 lg:gap-8">
        <h1 className="text-6xl lg:text-8xl">About</h1>
        <div className="mx-auto mt-10 w-[300px] h-[250px]">
          <img src={computer} alt="computer" />
        </div>
        <p className="text-xl text-teal-400 lg:text-2xl ">
          I&apos;m a full-stack developer and student of Bsc.Csit from
          Biratnagar, Nepal.
        </p>
        <p className="lg:text-xl text-gray-400">
          I am a tech savy student who loves to explore tech. I started using
          computer since grade 9 and never looked back since then.
        </p>
      </div>
    </div>
  );
};

export default About;
