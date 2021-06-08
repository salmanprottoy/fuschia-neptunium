import React from "react";
import profile from "../../assets/grid-1.jpeg";

const About = () => {
  return (
    <>
      <section className="px-5 pb-10 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center justify-center md:items-start">
          <div className="mr-1">
            <h4 className="font-bold">Salman Prottoy</h4>
            <p className="text-gray-500 text-sm">Lorem, ipsum dolor.</p>
          </div>
          <img src={profile} alt="" className="w-10 md:h-10 rounded-full" />
        </div>

        <div>
          <q className="text-4xl text-center block mt-5 md:mt-0">
            Whatever a man can imagine, he can invent.
          </q>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5 text-center md:text-left md:mt-0">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            consectetur dignissimos nostrum, dolorum ullam nam fugit praesentium
            neque nihil expedita reiciendis dolor quisquam consequuntur pariatur
            odit vitae sequi ad sunt iusto quidem. Aliquam esse, accusamus fuga
            ducimus rem at eligendi, repellendus alias ea mollitia doloremque
            repudiandae facere consequatur asperiores fugiat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, veniam quaerat nemo quas sint hic consequuntur
            blanditiis ipsum fugiat amet.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            laborum est sit saepe, tenetur quia! Aliquid, aperiam excepturi.
            Quae eligendi facilis quaerat aspernatur rem eos suscipit blanditiis
            exercitationem debitis enim.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
