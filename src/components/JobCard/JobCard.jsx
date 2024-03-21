import dayjs from "dayjs";

function Jobcard(props) {
  const cur_date = dayjs(Date.now());
  const diffInDays = cur_date.diff(props.postedDate, "days");
  const day = diffInDays === 1 ? "day" : "days";

  const skills = props.skills;
  return (
    <div className=" mx-6 mb-4 sm:mx-28 md:mx-20 lg:mx-40 xl:mx-60">
      <div className="flex flex-col gap-4 justify-between items-center py-4 shadow-lg rounded-md border border-black bg-zinc-200 hover:border-blue-200 hover:border-4 hover:translate-y-1 hover:scale-105 duration-500 ease-in-out md:flex-row md:px-6 lg:py-6 lg:px-6">
        <div className=" flex flex-col gap-3 md:items-start">
          <h1 className=" text-sm text-center font-semibold lg:text-base">
            {props.jobRole} - {props.company}
          </h1>
          <p className="text-sm text-center lg:text-base">
            {props.jobType} &#x2022; {props.experience} &#x2022;{" "}
            {props.location}
          </p>
          <div className="flex gap-2 items-center">
            {skills.map((skill) => {
              return (
                <p
                  className=" text-gray-700 border-gray-400 border-2 py-1 px-2 rounded-md text-sm lg:text-base"
                  key={skill}
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm lg:text-base lg:gap-5">
          <p className="text-gray-700">
            Posted {diffInDays} {day} ago
          </p>
          <a href={props.jobLink} target="_blank">
            <button className="text-blue-500 border border-blue-500 px-5 py-1 rounded-md lg:px-6 lg:py-3">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jobcard;
