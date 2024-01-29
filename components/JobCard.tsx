import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

import { MapPin, RadioTower, Calendar, Briefcase } from "lucide-react";

import { JobType } from "@/utils/types";
import JobInfo from "./JobInfo";

const JobCard = ({ job }: { job: JobType }) => {
  const date = new Date(job.createdAt).toLocaleDateString();

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator className="bg-primary" orientation="horizontal" />
      <CardContent className="mt-4 grid grid-cols-2 gap-4">
        <JobInfo icon={<Briefcase />} text={job.mode} />
        <JobInfo icon={<MapPin />} text={job.location} />
        <JobInfo icon={<Calendar />} text={date} />
        <Badge>
          <JobInfo icon={<RadioTower />} text={job.status} />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button size="sm">edit</Button>
        <Button size="sm">delete</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
