"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllJobsAction } from "@/utils/actions";
import { JobType } from "@/utils/types";
import JobCard from "./JobCard";

const JobsList = () => {
  const {
    data: jobs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobsAction(),
  });

  if (isError || !jobs) {
    return <h2>Error fetching jobs</h2>;
  }

  return (
    <section>
      {jobs.map((job: JobType) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </section>
  );
};

export default JobsList;
