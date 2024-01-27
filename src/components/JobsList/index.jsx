const JobsList = ({ jobs }) => {
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs &&
          jobs.map((job) => (
            <li key={job.id}>
              {job.position} - {job.company}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default JobsList;
