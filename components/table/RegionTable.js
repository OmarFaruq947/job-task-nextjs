const RegionTable = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#F8F8FB]">
        <br />
        <br />
        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              {/* HEAD start */}

              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3 text-left font-medium">
                    <input
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      type="checkbox"
                    />
                  </th>
                  <th className="px-6 py-3 text-left font-medium">SI.No.</th>
                  <th className="px-6 py-3 text-left font-medium">Region</th>
                </tr>
              </thead>
         
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      1
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">dbf</div>
                  </td>
                </tr>



                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      2
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">dbf</div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      3
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">dbf</div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      4
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">dbf</div>
                  </td>
                </tr>
              </tbody>
              {/* BODY end */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionTable;
