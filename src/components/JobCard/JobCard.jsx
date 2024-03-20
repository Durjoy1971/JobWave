import dayjs from "dayjs";

function Jobcard(props) {
  const cur_date = dayjs(Date.now());
  // console.log(cur_date);
  // console.log(props.postedDate);
  const diffInDays = cur_date.diff(props.postedDate, "days");
  // console.log(diffInDays);
  const day = diffInDays === 1 ? "day" : "days";

  const skills = props.skills;
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 shadow-lg rounded-md border border-black bg-zinc-200 hover:border-blue-200 hover:border-4 hover:translate-y-1 hover:scale-105 duration-500 ease-in-out">
        <div className=" flex flex-col gap-3">
          <h1 className="text-lg font-semibold">
            {props.jobRole} - {props.company}
          </h1>
          <p>
            {props.jobType} &#x2022; {props.experience} &#x2022;{" "}
            {props.location}
          </p>
          <div className="flex gap-2 items-center">
            {skills.map((skill) => {
              return (
                <p
                  className=" text-gray-700 border-gray-400 border-2 py-1 px-2 rounded-md"
                  key={skill}
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-700">
            Posted {diffInDays} {day} ago
          </p>
          <a href={props.jobLink} target="_blank">
            <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jobcard;
