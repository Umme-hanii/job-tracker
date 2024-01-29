import { JobType } from "@/utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const JobCard = ({ job }: { job: JobType }) => {
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <hr />
      <CardContent className="mt-4 grid grid-cols-2">
        <p>{job.mode}</p>
        <p>{job.location}</p>
        <p>{job.createdAt.getDate()}</p>
        <p>{job.status}</p>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button>edit</Button>
        <Button>delete</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
