import { useState } from "react";

function SearchBar({ filterJobs }) {
  const [jobCriteria, setJobCriteria] = useState({
    jobRole: "",
    jobType: "",
    location: "",
    experience: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const search = () => {
    filterJobs(jobCriteria);
    setJobCriteria({
      jobRole: "",
      jobType: "",
      location: "",
      experience: "",
    });
  };

  return (
    <div className="flex flex-col gap-3 my-6 items-center px-10 md:flex-row md:justify-center">
      <select
        name="jobRole"
        onChange={handleChange}
        value={jobCriteria.jobRole}
        className="w-40 pl-3 py-3 bg-green-200 font-semibold text-sm rounded-md sm:w-64 sm:py-4 sm:pl-5 sm:text-base md:w-32 md:pl-2 md:py-3 lg:w-40 lg:py-3 lg:pl-4"
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option className="font-medium" value="iOS Developer">
          iOS Developer
        </option>
        <option className="font-medium" value="Android Developer">
          Android Developer
        </option>
        <option className="font-medium" value="Frontend Developer">
          Frontend Developer
        </option>
        <option className="font-medium" value="Backend Developer">
          Backend Developer
        </option>
      </select>

      <select
        name="jobType"
        onChange={handleChange}
        value={jobCriteria.jobType}
        className="w-40 pl-3 py-3 bg-green-200 font-semibold text-sm rounded-md sm:w-64 sm:py-4 sm:pl-5 sm:text-base md:w-32 md:pl-2 md:py-3 lg:w-40 lg:py-3 lg:pl-4"
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option className="font-medium" value="Intern">
          Intern
        </option>
        <option className="font-medium" value="Full Time">
          Full-Time
        </option>
        <option className="font-medium" value="Part Time">
          Part-Time
        </option>
      </select>

      <select
        name="location"
        onChange={handleChange}
        value={jobCriteria.location}
        className="w-40 pl-3 py-3 bg-green-200 font-semibold text-sm rounded-md sm:w-64 sm:py-4 sm:pl-5 sm:text-base md:w-32 md:pl-2 md:py-3 lg:w-40 lg:py-3 lg:pl-4"
      >
        <option value="" disabled hidden>
          Location
        </option>
        <option className="font-medium" value="Remote">
          Remote
        </option>
        <option className="font-medium" value="In-Office">
          In-Office
        </option>
        <option className="font-medium" value="Hybrid">
          Hybrid
        </option>
      </select>

      <select
        name="experience"
        onChange={handleChange}
        value={jobCriteria.experience}
        className="w-40 pl-3 py-3 bg-green-200 font-semibold text-sm rounded-md sm:w-64 sm:py-4 sm:pl-5 sm:text-base md:w-32 md:pl-2 md:py-3 lg:w-40 lg:py-3 lg:pl-4"
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option className="font-medium" value="Fresher">
          Fresher
        </option>
        <option className="font-medium" value="Junior Level">
          Junior Level
        </option>
        <option className="font-medium" value="Mid Level">
          Mid Level
        </option>
        <option className="font-medium" value="Senior Level">
          Senior Level
        </option>
      </select>

      <button
        onClick={search}
        className="w-40 px-3 py-3 bg-blue-500 text-white font-bold text-sm rounded-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
