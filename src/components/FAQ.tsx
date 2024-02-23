"use client";

const FAQ = () => {
  return (
    <div className="BannerFaq py-40 px-24">
      <div className="text-center pb-12">
        <p className="text-[#FFFFFF] text-[20px] ">Common Question</p>
        <p className="text-[#FFFFFF] text-[48px] font-extrabold">
          Frequently asked questions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-[32px]">
        <div className="space-y-[32px]">
          <div className="collapse collapse-arrow bg-[#FFFFFF]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-[#0B141F] text-[20px] font-semibold">
              What kind of data can I see in FieldX?
            </div>
            <div className="collapse-content">
              <p className="text-[#0B141F] text-[20px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFFFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-[#0B141F] text-[20px] font-semibold">
              Does Bizzy read my customers data?
            </div>
            <div className="collapse-content">
              <p className="text-[#0B141F] text-[20px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFFFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-[#0B141F] text-[20px] font-semibold">
              What is your refund and cancellation policy?
            </div>
            <div className="collapse-content">
              <p className="text-[#0B141F] text-[20px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-[32px]">
          <div className="collapse collapse-arrow bg-[#FFFFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-[#0B141F] text-[20px] font-semibold">
              How do you take payments?
            </div>
            <div className="collapse-content">
              <p className="text-[#0B141F] text-[20px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFFFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-[#0B141F] text-[20px] font-semibold">
              Can I also track website analytics on fieldX?
            </div>
            <div className="collapse-content">
              <p className="text-[#0B141F] text-[20px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFFFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-[#0B141F] text-[20px] font-semibold">
              What makes Bizzy different from other analytics tools?
            </div>
            <div className="collapse-content">
              <p className="text-[#0B141F] text-[20px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
