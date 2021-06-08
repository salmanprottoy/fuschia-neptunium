import React from "react";
import { GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";

const About2 = () => {
  return (
    <>
      <section className="px-5 md:w-1/2 md:ml-auto lg:pr-40 pb-10">
        <h2 className="text-3xl text-center mb-2 md:text-left">
          Know Yourself Know your power
        </h2>
        <div className="bg-blue-900 h-1 w-20 mx-auto mb-5 md:mx-0"></div>
        <div className="grid grid-cols-1 gap-5 text-center md:text-left ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            eveniet veniam in quidem sunt quos aspernatur facilis, assumenda qui
            dignissimos rem provident suscipit, quaerat corporis, ipsam animi
            officia nesciunt et illo perferendis veritatis voluptatem minima
            deleniti praesentium! Est doloribus nemo, in optio pariatur nisi,
            quaerat vel quod ipsum ratione libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            adipisci iure cumque quas dolorem, facere quam veritatis commodi
            praesentium accusamus totam facilis atque, ullam quod reprehenderit
            a maiores pariatur nostrum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            facilis!
          </p>
          <ul className="flex items-center justify-center md:justify-start">
            <li className="mx-5 text-2xl">
              <a href="https://www.facebook.com/salman.prottoy1">
                <GrFacebook />
              </a>
            </li>
            <li className="mx-5 text-2xl">
              <a href="https://twitter.com/salman_prottoy">
                <GrTwitter />
              </a>
            </li>
            <li className="mx-5 text-2xl">
              <a href="https://www.instagram.com/salman_prottoy">
                <GrInstagram />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About2;
