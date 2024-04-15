import React, { useState } from "react";
import data from "../data"; 

const BasicSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const filteredResults = data.filter((result) => {
      if (selectedAttribute) {
        return (
          result[selectedAttribute].toLowerCase() === searchQuery.toLowerCase()
        );
      } else {
        return (
          result.Fabric.toLowerCase() === searchQuery.toLowerCase() ||
          result.Technique.toLowerCase() === searchQuery.toLowerCase() ||
          result["Artifact Type"].toLowerCase() === searchQuery.toLowerCase() ||
          result.Date.toLowerCase() === searchQuery.toLowerCase() ||
          result.Description.toLowerCase() === searchQuery.toLowerCase() ||
          result["Attributed To"].toLowerCase() === searchQuery.toLowerCase()
        );
      }
    });

    setSearchResults(filteredResults);
  };

  const handleAttributeClick = (attribute) => {
    setSelectedAttribute((prevAttribute) =>
      prevAttribute === attribute ? null : attribute
    );
  };

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="px-6 py-20 text-center sm:px-16">
        <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Basic Search
        </p>

        <div className="flex justify-center space-x-3 py-3 md:space-x-8">
          <button
            onClick={() => handleAttributeClick("Fabric")}
            className={`mb-2 rounded-lg border ${
              selectedAttribute === "Fabric"
                ? "bg-gray-300"
                : "border-gray-300 bg-white"
            } px-3 py-1 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700`}
          >
            Fabric
          </button>
          <button
            onClick={() => handleAttributeClick("Artifact Type")}
            className={`mb-2 rounded-lg border ${
              selectedAttribute === "Artifact Type"
                ? "bg-gray-300"
                : "border-gray-300 bg-white"
            } px-3 py-1 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700`}
          >
            Artifact Type
          </button>
          <button
            onClick={() => handleAttributeClick("Date")}
            className={`mb-2 rounded-lg border ${
              selectedAttribute === "Date"
                ? "bg-gray-300"
                : "border-gray-300 bg-white"
            } px-3 py-1  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700`}
          >
            Date
          </button>
          <button
            onClick={() => handleAttributeClick("Attributed To")}
            className={`mb-2 rounded-lg border ${
              selectedAttribute === "Attributed To"
                ? "bg-gray-300"
                : "border-gray-300 bg-white"
            } px-3 py-1  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700`}
          >
            Attributed To
          </button>
        </div>

        {/* 
        Search form 
        */}
        <form onSubmit={handleSearch} className="">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter Your Search!"
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />
          <button
            type="submit"
            className="mt-4 rounded-md bg-black px-3 py-1 text-white"
          >
            Search
          </button>
        </form>

        {/* 
        Search result 
        */}
        <div className="mt-8">
          <div className="">
            {searchResults.map((result, index) => (
              <div key={index} className="border-b border-gray-200 py-2">
                <div>
                  <p>Fabric: {result.Fabric}</p>
                  <p>Technique: {result.Technique}</p>
                  <p>Artifact Type: {result["Artifact Type"]}</p>
                  <p>Date: {result.Date}</p>
                  <p>Description: {result.Description}</p>
                  <p>Attributed To: {result["Attributed To"]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSearch;
