import { useState } from "react";
import ovalIcon from "/assets/desktop/icon-oval.svg";
import { Link } from "react-router-dom";

const JobsList = ({ jobs }) => {
  const [visibleJobs, setVisibleJobs] = useState(12);

  const loadMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 12);
  };
  return (
    <section className="flex w-full flex-col items-center gap-8 pb-16">
      <h1 className="invisible absolute left-0 top-0">Job Listings</h1>
      <ul className="flex w-full flex-col gap-[3.125rem]">
        {jobs.slice(0, visibleJobs).map((job) => (
          <li
            className="flex w-full flex-col gap-6 rounded-md bg-white px-8 pb-8"
            key={job.id}
          >
            <div
              className="-mt-[1.563rem] flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-[0.938rem]"
              style={{ backgroundColor: job.logoBackground }}
            >
              <img src={job.logo} alt="" />
            </div>
            <div className="flex w-full flex-col gap-11">
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center gap-3">
                  <span className="text-base font-normal leading-5 tracking-normal text-dark-grey">
                    {job.postedAt}
                  </span>
                  <img className="h-1 w-1" src={ovalIcon} alt="oval icon" />
                  <span className="text-base font-normal leading-5 tracking-normal text-dark-grey">
                    {job.contract}
                  </span>
                </div>
                <Link className="w-fit" to={`/${job.id}`}>
                  <h2 className="text-xl font-bold leading-[1.563rem] tracking-normal text-very-dark-blue">
                    {job.position}
                  </h2>
                </Link>
                <span className="text-base font-normal leading-5 tracking-normal text-dark-grey">
                  {job.company}
                </span>
              </div>
              <span className="text-sm font-bold leading-[1.063rem] tracking-normal text-violet">
                {job.location}
              </span>
            </div>
          </li>
        ))}
      </ul>
      {visibleJobs < jobs.length && (
        <button
          className="rounded-[5px] bg-violet px-8 py-4 text-center  text-base font-bold leading-5 tracking-normal text-white"
          onClick={loadMoreJobs}
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default JobsList;
