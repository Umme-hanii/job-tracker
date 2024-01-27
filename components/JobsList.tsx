"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllJobsAction } from "@/utils/actions";
import { JobType } from "@/utils/types";
import JobCard from "./JobCard";

const JobsList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobsAction(),
  });

  const jobs = data || [];

  if (isPending) return <h2 className="text-xl capitalize">please wait</h2>;
  if (jobs.length < 1)
    return <h2 className="text-xl capitalize">no jobs found</h2>;

  return (
    <section>
      {jobs.map((job: JobType) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </section>
  );
};

export default JobsList;
