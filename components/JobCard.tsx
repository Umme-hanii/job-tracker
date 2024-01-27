import { JobType } from "@/utils/types";

const JobCard = ({ job }: { job: JobType }) => {
  return (
    <div>
      <h2>{job.position}</h2>
      <h2>{job.company}</h2>
    </div>
  );
};

export default JobCard;
