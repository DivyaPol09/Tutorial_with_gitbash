import React from "react";

const Brands = () => {
  let brands = [
    "Louis Vuitton",
    "Benetton",
    "Channel",
    "Raymond",
    "Puma",
    "Nike",
  ];

  return (
    <>
      <section className="border-b-2 pb-2 border-gray-200 ">
        <p className="font-medium font-serif text-[20px] pl-4 pb-1">Brands:</p>

        {brands.map((e, ind) => {
          return (
            <div className="flex items-center pl-6 " key={ind}>
              <input
                type="checkbox"
                className="scale-[0.9] rounded	border-radius: 0.25rem"
              />
              <p className="pl-3 "> {e} </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Brands;
