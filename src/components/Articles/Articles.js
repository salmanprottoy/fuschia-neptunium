import React from "react";
import { articles } from "../../data/articles";

const Articles = () => {
  const [items, setItems] = React.useState(articles);
  return (
    <>
      <div className="pt-5">
        <h2 className="text-center text-3xl mb-2">News Articles</h2>
        <div className="bg-blue-900 h-1 w-20 mx-auto mb-5"></div>
      </div>
      <section className="grid grid-cols-1 gap-5 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl lg:mx-auto">
        {items.map((item) => {
          const { id, title, desc, image } = item;
          return (
            <article
              key={id}
              className="flex items-center bg-blue-200 rounded-lg"
            >
              <img src={image} alt="" className="w-32 rounded-l-lg lg:w-20" />
              <div className="ml-2">
                <h4 className="mb-2 text-xl">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Articles;
