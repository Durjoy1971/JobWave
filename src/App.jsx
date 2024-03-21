import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Jobcard from "./components/JobCard/JobCard";
import DataFetch from "./components/DataFetch/DataFetch";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  const [filterData, setFilterData] = useState([]);

  let wholeData = DataFetch();

  const filterJobs = (jobCriteria) => {
    setState(true);

    let filteredData = wholeData;

    Object.entries(jobCriteria).forEach(([key, value]) => {
      if (value !== "") {
        filteredData = filteredData.filter((job) => job[key] === value);
      }
    });

    setFilterData(filteredData);
  };

  let jobData = state ? filterData : wholeData;

  const inverseData = () => {
    setState(false);
  };
  return (
    <div className="font-display">
      <Navbar />
      <Header />
      <SearchBar filterJobs={filterJobs} />
      {state && (
        <div className="w-auto mb-10 flex justify-center ">
          <button
            onClick={inverseData}
            className=" bg-zinc-500 text-white font-semibold text-base py-2 px-4 rounded-md"
          >
            Clear Filter
          </button>
        </div>
      )}
      {jobData.map((job) => {
        return <Jobcard key={job.id} {...job} />;
      })}
    </div>
  );
}

export default App;
