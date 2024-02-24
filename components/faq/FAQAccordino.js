'use client'

import { Icon } from "@iconify/react";
import { useState } from "react";

const FAQAccordino = ({ item }) => {
  const [items, setItems] = useState(item);
  const handletoggleActive = () => {
    let newActive = items.active === 1 ? 0 : 1;
    setItems({ ...items, active: newActive });
  };
  return (
    <div className="">
      <div
        className={`bg-[#e9e9e9] p-5 mb-5 border border-[#c9c6c655] rounded-md w-[80%] mx-auto group ${
          items.active === 1 ? "is-active bg-white" : ""
        } `}
        onClick={handletoggleActive}
      >
        <div className="flex items-center " onClick={handletoggleActive}>
          <div className="w-full group-[.is-active]:font-bold">
            {items.question}
          </div>
          <div
            className="text-xl cursor-pointer group-[.is-active]:rotate-[180deg]"
            onClick={handletoggleActive}
          >
            <Icon icon="fluent-mdl2:drill-down" />
          </div>
        </div>

        <div className="overflow-hidden max-h-0    duration-300  group-[.is-active]:max-h-[100px]">
          {items.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordino;