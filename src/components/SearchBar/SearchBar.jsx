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
    <div className="flex gap-4 my-10 justify-center px-10">
      <select
        name="jobRole"
        onChange={handleChange}
        value={jobCriteria.jobRole}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
      </select>

      <select
        name="jobType"
        onChange={handleChange}
        value={jobCriteria.jobType}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="">Job Type</option>
        <option value="Intern">Intern</option>
        <option value="Full Time">Full-Time</option>
        <option value="Part Time">Part-Time</option>
      </select>

      <select
        name="location"
        onChange={handleChange}
        value={jobCriteria.location}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="">Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        name="experience"
        onChange={handleChange}
        value={jobCriteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="">Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>

      <button
        onClick={search}
        className="w-64 py-3 bg-blue-500 text-white font-bold rounded-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
