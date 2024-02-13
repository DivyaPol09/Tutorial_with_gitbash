import React from "react";
import BoysTeeData from "../../../../jsonfiles/boysTshirts.json";
import { ImStarFull } from "react-icons/im";
// import { Button } from "flowbite-react";
import BoysteeFilter from "./Filters/filters";

const BoysTshirts = () => {
  let { boysTshirts } = BoysTeeData;
  console.log(boysTshirts);

  return (
    <>
      <div className=" min-h-[100vh] w-[100%] flex">
        <aside className="w-[18%] h-[100vh] bg-purple-50 border-x-2 	border-left-width: 8px sticky top-0">
          <BoysteeFilter />
        </aside>
        <aside className="p-7 w-[82%] h-[100%] bg-purple-50 justify-center flex gap-14 flex-wrap">
          {boysTshirts.map((item) => {
            return (
              <div
                key={item.id}
                className="relative max-w-xs overflow-hidden rounded-lg  bg-cover bg-no-repeat "
              >
                <img
                  src={item.img_url}
                  alt="pic"
                  className="w-[232px] h-[300px] max-w-xs rounded-lg transition duration-300 ease-in-out hover:scale-110 "
                />
                <article>
                  <p className="text-lg font-ComicNeue font-bold  tracking-tight text-gray-900 dark:text-white pb-1 pl-2 pt-2 mt-1">
                    {" "}
                    {item.name}
                  </p>

                  <div className="flex pl-2 mt-0.5">
                    <span className="flex gap-1 text-yellow-300 ">
                      <ImStarFull /> <ImStarFull />
                      <ImStarFull /> <ImStarFull /> <ImStarFull />
                    </span>
                    <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-800 dark:text-cyan-800">
                      {item.rating}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-2xl pl-2 pt-0 mt-2 font-sans font-bold  text-gray-900 dark:text-white">
                      {item.price}.Rs
                    </h3>

                    {/* <Button
                      className="flex-shrink-0 h-10  mb-0 ml-3 mt-2 font-ComicNeue font-bold "
                      outline
                      gradientDuoTone="greenToBlue"
                    >
                      Add to Cart
                    </Button> */}
                    <button className="px-4 py-1.5 ml-4 mt-2  bg-purple-200 font-sans font-medium text-black rounded-lg hover:bg-purple-300 ">
                      Add to Cart
                    </button>
                  </div>
                </article>
              </div>
            );
          })}
        </aside>
      </div>
    </>
  );
};

export default BoysTshirts;
