import React from 'react'

export default function Certification() {
  return (
    <div>
      <h1 className='text-3xl font-bold pb-4 pt-3'>{`LIST OF "STUDENTS" WHO GOT CERTIFIED `}</h1>
      {/* SEARCHBAR */}
      {/* <div className="p-2 pb-3">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input className="rounded-l-full w-full px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search Course" />

          <div className="p-1">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              icon
            </button>
          </div>
        </div>
      </div> */}

      <div className='overflow-x-auto w-full'>
        <table className="w-full mx-auto border-collapse border-2 border-gray-300">
          <thead>
            <tr className='text-lg'>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">S.No</th>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">Std_Name</th>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">Std_Email</th>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">Course Name</th>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">Course Teacher</th>
              {/* <th className="border border-gray-400 px-4 py-2 text-gray-800">Active / Unactive Course</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">Java</td>
              <td className="border border-gray-400 px-4 py-2">not much</td>
              <td className="border border-gray-400 px-4 py-2">DR.Smith</td>
              <td className="border border-gray-400 px-4 py-2">20</td>
              {/*
              <td className="border border-gray-400 px-4 py-2">

                <div className="flex align-middle  items-center justify-center w-full">
                  <label
                    htmlFor="toogleA"
                    className="flex items-center cursor-pointer">

                    <div className="relative">
                      <input id="toogleA" type="checkbox" className="sr-only" />
                      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                      <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                    </div>

                  </label>
                </div>

              </td> */}

              {/* <td className="border border-gray-400 px-4 py-2">
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/manage">Manage Request</Link>

                </button>
              </td> */}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">2</td>
              <td className="border border-gray-400 px-4 py-2">C++</td>
              <td className="border border-gray-400 px-4 py-2">not much</td>
              <td className="border border-gray-400 px-4 py-2">DR.John</td>
              <td className="border border-gray-400 px-4 py-2">25</td>

              {/* <td className="border border-gray-400 px-4 py-2">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="toogleB"
                    className="flex items-center cursor-pointer"
                  >

                    <div className="relative">

                      <input id="toogleB" type="checkbox" className="sr-only" />

                      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                      <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                    </div>
                  </label>
                </div>
              </td> */}

              {/* <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/manage">Manage Request</Link>
              </button>
              </td> */}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">3</td>
              <td className="border border-gray-400 px-4 py-2">Python</td>
              <td className="border border-gray-400 px-4 py-2">not much</td>
              <td className="border border-gray-400 px-4 py-2">DR.Wick</td>
              <td className="border border-gray-400 px-4 py-2">35</td>

              {/* <td className="border border-gray-400 px-4 py-2">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="toogleC"
                    className="flex items-center cursor-pointer"
                  >

                    <div className="relative">

                      <input id="toogleC" type="checkbox" className="sr-only" />

                      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                      <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                    </div>
                  </label>
                </div>
              </td> */}

              {/* <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/manage">Manage Request</Link>
              </button>
              </td> */}
            </tr>
          </tbody>
        </table>

        {/* <div className='flex justify-center align-middle py-3'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-2/4 rounded">
            Save
          </button>
        </div> */}
      </div>

    </div >
  )
}
