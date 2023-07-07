import React, { useState } from "react";
import "./app.css";
const App2 = () => {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [listA2, setListA2] = useState("");
  const [listB2, setListB2] = useState("");
  const [itemsInA, setItemsInA] = useState([]);
  const [itemsInB, setItemsInB] = useState([]);
  const [bothItems, setBothItems] = useState([]);
  const [uniqueItems, setUniqueItems] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const arr1 = listA.split(",");
    const arr2 = listB.split(",");
    const arr11 = listA2.split(",");
    const arr22 = listB2.split(",");

    const arrayA = arr1.map((item) => item.trim());
    const arrayB = arr2.map((item) => item.trim());

    const arrayA1 = arr11.map((item) => item.trim());
    const arrayB1 = arr22.map((item) => item.trim());

    const itemsIn_A = arrayA.filter((item) => !arrayB.includes(item));
    const itemsIn_B = arrayB.filter((item) => !arrayA.includes(item));

    const common = [...arrayA1, ...arrayB1];
    const unique = [...new Set([...arrayA1, ...arrayB1])];

    setItemsInA([...itemsIn_A]);
    setItemsInB([...itemsIn_B]);

    setBothItems(common);
    setUniqueItems(unique);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <form
          onSubmit={handleClick}
          className="max-w-md mx-auto bg-white drop-shadow-xl shadow rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              List A
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              placeholder="xyz,yzp,lkg...."
              required
              onChange={(e) => {
                setListA(e.target.value);
                setListA2(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              List B
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="xyz,yzp,lkg...."
              required
              onChange={(e) => {
                setListB(e.target.value);
                setListB2(e.target.value);
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="Submit"
            >
              Compute
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto p-4   ">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-red-400 font-bold ">
            Items Present Only In List A:
          </h3>
          <ul>
            {itemsInA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-red-400 font-bold pt-8">
            Items Present Only In List B:
          </h3>
          <ul>
            {itemsInB.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-red-400 font-bold pt-8">
            Items present in both A and B:
          </h3>
          <ul>
            {bothItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-red-400 font-bold pt-8">
            Items combining both A and B (unique) :
          </h3>
          <ul>
            {uniqueItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App2;
