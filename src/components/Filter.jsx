import { IoColorFilter } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Product from "./Product";
import DefaultLayout from "./DefaultLayout";
import { CircularProgress, Skeleton, Stack } from "@mui/material";
const Filter = () => {
  const [products, setProducts] = useState([]);
  const [time, setTime] = useState([30, 50]);

  const handleTimeChange = (e, index) => {
    const newTime = [...time];
    newTime[index] = e.target.value;
    setTime(newTime);
  };

  const [selectedRatings, setSelectedRatings] = useState([]);

  const ratings = [5, 4, 3, 2, 1];

  const handleCheckboxChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r > rating));
    } else {
      setSelectedRatings([
        ...selectedRatings,
        ...ratings.filter((r) => r <= rating),
      ]);
    }
  };

  useEffect(()=>{
    fetch("https://67c83bb60acf98d070858496.mockapi.io/myreactapp/myAppReact")
      .then((req) => req.json())
      .then((data) => setProducts(data));
  }, []);

  if(products.length==0){
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    )
  }

  return (
    <DefaultLayout>
      <div className="max-w-7xl m-auto py-10">
        <div className="flex gap-10">
          <div className="border rounded-md w-96">
            <div className="p-5">
              <div className="flex gap-2 items-center font-semibold text-xl mb-3">
                <IoColorFilter />
                <h1 className="uppercase">Filters</h1>
              </div>
              <div className="pb-5 border-b-2 mb-5">
                <div className="flex justify-between items-center mb-3">
                  <h1 className="text-xl">Type</h1>
                  <FaChevronUp />
                </div>
                <div className="grid grid-cols-2 gap-y-4">
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="size-4" />
                    <span className="text-lg">Pan-fried</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="size-4" />
                    <span className="text-lg">Pan-fried</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="size-4" />
                    <span className="text-lg">Pan-fried</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="size-4" />
                    <span className="text-lg">Pan-fried</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="size-4" />
                    <span className="text-lg">Pan-fried</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="size-4" />
                    <span className="text-lg">Pan-fried</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input type="checkbox" className="size-4" />
                    <span className="text-lg">Pan-fried</span>
                  </div>
                </div>
              </div>
              <div className="border-b-2 pb-5">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-xl">Time</h1>
                  <FaChevronUp />
                </div>
                <div className="flex justify-between items-center">
                  <span>{time[0]} minutes</span>
                  <span>{time[1]} minutes</span>
                </div>
                <div className="relative flex items-center mt-4">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={time[0]}
                    onChange={(e) => handleTimeChange(e, 0)}
                    className="absolute w-full bg-pink-200 h-1 rounded"
                  />
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={time[1]}
                    onChange={(e) => handleTimeChange(e, 1)}
                    className="absolute w-full bg-pink-200 h-1 rounded"
                  />
                </div>
              </div>
              <div className="border-b pb-5 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-xl">Rating</h1>
                  <FaChevronUp />
                </div>
                <div className="space-y-3">
                  {ratings.map((rating, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id={`rating-${rating}`}
                        checked={selectedRatings.includes(rating)}
                        onChange={() => handleCheckboxChange(rating)}
                        className="size-4 text-pink-500 rounded focus:ring-pink-500"
                      />
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={`text-2xl ${
                              i < rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl">Salad(32)</h1>
              <input list="cars" className="border outline-none" />
              <datalist id="cars">
                <option value="BMW" />
              </datalist>
            </div>
            <div className="grid grid-cols-3 mt-10 gap-10">
              {
                products.map((product, index)=>(
                  <div key={index}>
                    <Product product={product}/>
                  </div>
                ))
              }
            </div>
            <div className="flex justify-center mt-6">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Previous
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      100
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Filter;
