const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  flex justify-center items-center "
    >
      <form
        method="POST"
        action="https://getform.io/f/nbdeolja"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h1 className=" text-6xl lg:text-8xl text-center">Contact</h1>
          <p className="text-gray-300 py-4 text-center text-xl ">
            Submit the form below or mail me at - kaflenk123@gmail.com
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2  bg-[#ccd6f6]  text-black"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className=" bg-[#ccd6f6] text-black p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
