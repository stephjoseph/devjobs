// Home.js
import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import JobsList from "../../components/JobsList";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/jobs");
        const data = await response.json();
        setJobs(data);
        setFilteredJobs(data); // Initially, set filtered jobs to all jobs
        setIsPending(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    // Filter jobs whenever searchTerm, location, or jobs change
    const filterJobs = () => {
      const filtered = jobs.filter(
        (job) =>
          (searchTerm === "" ||
            job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (location === "" ||
            job.location.toLowerCase().includes(location.toLowerCase())) &&
          (!isFullTime || job.contract.toLowerCase() === "full time"),
        // Add more conditions based on your job object structure
      );

      setFilteredJobs(filtered);
    };

    filterJobs();
  }, [searchTerm, location, jobs, isFullTime]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const handleFullTimeChange = (isChecked) => {
    setIsFullTime(isChecked);
  };

  return (
    <main className="relative -mt-10 flex w-full flex-col gap-8 px-6">
      <Searchbar
        onSearch={handleSearch}
        onLocationChange={handleLocationChange}
        onFullTimeChange={handleFullTimeChange}
      />
      {isPending && <div>Loading...</div>}
      {filteredJobs.length !== 0 && <JobsList jobs={filteredJobs} />}
    </main>
  );
};

export default Home;
