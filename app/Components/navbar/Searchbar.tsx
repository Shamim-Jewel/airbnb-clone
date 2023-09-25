import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="border-[1px] w-full  md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer ">
      <div className="flex flex-row justify-between items-center">
        <div className="tex-sm font-semibold    px-6"> anywhere</div>
        <div className="hidden sm:block px-6  border-x-[1px] font-semibold flex-1 text-center">
          any week
        </div>
        <div className="text-sm gap-3 flex flex-row items-center text-gray-600">
          <div className="hidden sm:block"> Add Guests</div>
          <div className="p-2 rounded-full text-white bg-rose-500 mr-1 ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
