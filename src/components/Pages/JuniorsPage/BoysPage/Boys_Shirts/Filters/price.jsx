import React from "react";
const Price = () => {
  let prices = [1000, 1299, 1500, 1199, 1250, 1200, 2000];
  //   let objs = [ {name : 'divya' , age : 22}, {name: 'divyanshu', age: 23}, {name: 'xyz'}, {}  ]
  return (
    <>
      <section className="border-b-2 pb-2 border-gray-200 ">
        <p className="font-medium font-serif text-[20px] pl-4 pb-1">Prices:</p>
        {prices.map((e, ind) => {
          return (
            <div className="flex items-center pl-6 " key={ind}>
              <input
                type="checkbox"
                className="scale-[0.9] rounded	border-radius: 0.25rem"
              />
              <p className="pl-3 font-ComicNeue font-bold  "> {e}.Rs </p>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Price;
