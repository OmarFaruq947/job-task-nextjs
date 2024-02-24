"use client";
import RegionTable from "@/components/table/RegionTable";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Page() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-screen">
      <div className="flex items-center justify-end ">
        <button
          className="flex items-center py-1 px-2 bg-[#0B2E4E] text-white rounded font-medium duration-500"
          onClick={toggleModal}
        >
          <Icon icon="ic:baseline-plus" /> <span>Create New</span>
        </button>
      </div>

      <RegionTable />

      {showModal && (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <label className="font-medium text-[#495057]">Region</label>
                <input
                  type="text"
                  placeholder="Type region"
                  className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                />
              </div>



              {/* button */}
              <div className="bg-gray-200 px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-red-200 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={toggleModal}
                >
                  <i className="fas fa-times"></i> Cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-4 bg-[#0B2E4E] text-white rounded font-medium  mr-2 transition duration-500"
                  onClick={toggleModal}
                >
                  <i className="fas fa-plus"></i> Add Region
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
