import React from "react";

const Colors = () => {
  let colors = ["cyan", "black", "yellow", "chartreuse", "red"];

  return (
    <>
      <section className="border-b-2 pb-2 border-gray-200">
        <p className="font-medium font-serif text-[20px] pl-4 pb-1">Colors:</p>
        {colors.map((e, ind) => {
          return (
            <div className="flex items-center pl-6 " key={ind}>
              <input
                type="checkbox"
                className="scale-[0.9] rounded	border-radius: 0.25rem "
              />
              <main className="pl-2">
                <div
                  id="color-ball"
                  className="pl-2 h-[15px] w-[15px] rounded-[50%]"
                  style={{ backgroundColor: e }}
                ></div>
              </main>

              <p className="pl-3 font-ComicNeue font-bold "> {e} </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Colors;
