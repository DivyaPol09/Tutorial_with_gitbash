import React from "react";
import Brands from "./Brands.jsx";
import Price from "./price.jsx";
import Colors from "./colors.jsx";
import { FiFilter } from "react-icons/fi";

const BoysjeansFilter = () => {
  return (
    <div className="h-[100vh] flex flex-col gap-2 overflow-y-scroll">
      <article className="flex justify-between pb-2 border-b-2  border-gray-200">
        <h1 className="font-medium text-[24.32px] pl-3 font-serif">Filters</h1>
        <FiFilter className="relative top-2 mr-3 mt-1.5" />
      </article>
      <Brands />
      <Price />
      <Colors />
    </div>
  );
};

export default BoysjeansFilter;
