'use client'

import { useState } from "react";
import FAQAccordino from "../faq/FAQAccordino";

const FAQ = () => {
  const [list, setList] = useState([
    {
      question: "what is your name ?",
      answer:
        "my name is omar faruq Lorem ipsum dolor sit amet",
      active: 1,
    },
    {
      question: "whay is tailwind css ?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
  ]);

  return (
    <div className="BannerFaq py-40 px-24">
      <div className="text-center pb-12">
        <p className="text-[#FFFFFF] text-[20px] ">Common Question</p>
        <p className="text-[#FFFFFF] text-[48px] font-extrabold">
          Frequently asked questions
        </p>
      </div>
      {list.map((item, key) => (
        <FAQAccordino key={item.answer.length} item={item} />
      ))}
    </div>
  );
};

export default FAQ;