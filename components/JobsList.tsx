"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllJobsAction } from "@/utils/actions";
import { JobType } from "@/utils/types";

const JobsList = () => {
  const {
    data: jobs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobsAction(),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError || !jobs) {
    return <h2>Error fetching jobs</h2>;
  }

  return (
    <section>
      {jobs.map((job: JobType) => {
        return (
          <div key={job.id}>
            <h2>{job.position}</h2>
            <span>{job.company}</span>
          </div>
        );
      })}
    </section>
  );
};

export default JobsList;
