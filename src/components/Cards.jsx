import { FaPython, FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiPostgresql } from "react-icons/si";

const Cards = () => {
  return (
    <div className="mt-10 grid grid-cols-1 place-items-center gap-10 ">
      <div className="card w-96 bg-base-100 shadow-2xl ">
        <div className="card-body">
          <div className="flex gap-4 justify-center items-center">
            <FaReact className="w-10 h-10" />
            <h1>React Js</h1>
          </div>
          <p>
            Powerful modern frontend framework for building single page
            application
          </p>
          <div className="flex justify-center">
            <p>Confidence:</p>
            <div className="card-actions justify-end">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star"
                  checked
                  disabled={true}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star"
                  checked
                  disabled={true}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star"
                  checked
                  disabled={true}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star"
                  checked
                  disabled={true}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star"
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <p>Experience: 1 year of building web apps. </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="flex gap-4 justify-center items-center">
            <LiaNode className="w-10 h-10" />
            <h1>Node Js</h1>
          </div>
          <p>Widely used runtime of Javascript to build rest apis.</p>
          <div className="flex justify-center">
            <p>Confidence:</p>
            <div className="card-actions justify-end">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className=" mask mask-star"
                />
              </div>
            </div>
          </div>
          <p>Experience: 1 year of building web apis. </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="flex gap-4 justify-center items-center">
            <SiPostgresql className="w-10 h-10" />
            <h1>Postgresql</h1>
          </div>
          <p>Widely used relational database</p>
          <div className="flex justify-center">
            <p>Confidence:</p>
            <div className="card-actions justify-end">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  disabled={true}
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  disabled={true}
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  disabled={true}
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  disabled={true}
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  disabled={true}
                  className="mask mask-star"
                />
              </div>
            </div>
          </div>
          <p>Experience: 1 year of using postgres. </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="flex gap-4 justify-center items-center">
            <FaPython className="w-10 h-10" />
            <h1>Python</h1>
          </div>
          <p>A powerful programming language in this modern era.</p>
          <div className="flex justify-center">
            <p>Confidence:</p>
            <div className="card-actions justify-end">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  disabled={true}
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  disabled={true}
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  disabled={true}
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  disabled={true}
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-4"
                  disabled={true}
                  className="mask mask-star"
                />
              </div>
            </div>
          </div>
          <p>Experience: 6 months of using python. </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
