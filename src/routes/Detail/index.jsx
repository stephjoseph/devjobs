import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ovalIcon from "/assets/desktop/icon-oval.svg";

const Detail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/jobs/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const jobData = data.filter((item) => item.id === Number(id));

        setJob(jobData[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {job ? (
        <>
          <main className="relative -mt-10 flex w-full flex-col gap-6 px-6 pb-16">
            <section className="flex w-full flex-col items-center">
              <div
                className="z-10 flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-[0.938rem]"
                style={{ backgroundColor: job.logoBackground }}
              >
                <img src={job.logo} alt="" />
              </div>
              <div className="-mt-[1.563rem] flex w-full flex-col items-center gap-7 rounded-md bg-white pb-8 pt-12">
                <div className="flex flex-col gap-3">
                  <h1 className="text-center text-xl font-bold leading-[1.563rem] tracking-normal text-very-dark-blue">
                    {job.company}
                  </h1>
                  <p className="text-center text-base font-normal leading-5 tracking-normal text-dark-grey">
                    {job.company.toLowerCase()}.com
                  </p>
                </div>
                <a
                  href={job.website}
                  className="rounded-[5px] bg-violet/10 px-5 py-4 text-base font-bold leading-5 tracking-normal text-violet"
                >
                  Company Site
                </a>
              </div>
            </section>
            <section className="flex w-full flex-col gap-8 rounded-md bg-white px-6 py-10">
              <div className="flex w-full flex-col gap-14">
                <div className="flex w-full flex-col gap-3">
                  {" "}
                  <div className="flex w-full items-center gap-3">
                    <span className="text-base font-normal leading-5 tracking-normal text-dark-grey">
                      {job.postedAt}
                    </span>
                    <img className="h-1 w-1" src={ovalIcon} alt="oval icon" />
                    <span className="text-base font-normal leading-5 tracking-normal text-dark-grey">
                      {job.contract}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold leading-[1.563rem] tracking-normal text-very-dark-blue">
                    {job.position}
                  </h2>
                  <span className="text-sm font-bold leading-[1.063rem] tracking-normal text-violet">
                    {job.location}
                  </span>
                </div>
                <a
                  href={job.apply}
                  className="w-full rounded-[5px] bg-violet py-4 text-center text-base font-bold leading-5 tracking-normal text-white"
                >
                  Apply Now
                </a>
              </div>
              <div className="flex w-full flex-col gap-10">
                <p className="text-base font-normal leading-[1.625rem] tracking-normal text-dark-grey">
                  {job.description}
                </p>
                <section className="flex w-full flex-col gap-7">
                  <h3 className="text-xl font-bold capitalize leading-[1.563rem] tracking-normal text-very-dark-blue">
                    Requirements
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="text-base font-normal leading-[1.625rem] tracking-normal text-dark-grey">
                      {job.requirements.content}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {job.requirements.items.map((item, i) => (
                        <li
                          key={"Requirement" + i}
                          className="relative pl-9 text-base font-normal leading-[1.625rem] tracking-normal text-dark-grey before:absolute before:left-0 before:top-0 before:h-1 before:w-1 before:text-[2rem] before:text-violet before:content-['•']"
                        >
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                <section className="flex w-full flex-col gap-7">
                  <h3 className="text-xl font-bold capitalize leading-[1.563rem] tracking-normal text-very-dark-blue">
                    What will do
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="text-base font-normal leading-[1.625rem] tracking-normal text-dark-grey">
                      {job.role.content}
                    </p>
                    <ol className="flex flex-col gap-2">
                      {job.role.items.map((item, i) => (
                        <li
                          key={"Requirement" + i}
                          className="relative pl-9 text-base font-normal leading-[1.625rem] tracking-normal text-dark-grey before:absolute before:left-0 before:top-0 before:h-1 before:w-1 before:text-base before:font-bold before:leading-[1.625rem] before:tracking-normal before:text-violet before:content-[counter(item)]"
                          style={{ counterIncrement: "item" }}
                        >
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>
              </div>
            </section>
          </main>
          <footer className="w-full rounded-md bg-white p-6">
            <a
              href={job.apply}
              className="block w-full rounded-[5px] bg-violet py-4 text-center text-base font-bold leading-5 tracking-normal text-white"
            >
              Apply Now
            </a>
          </footer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Detail;
