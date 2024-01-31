"use client";

import { JobStatus } from "@/utils/types";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

const SearchForm = () => {
  const items = ["all", ...Object.values(JobStatus)];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;
    console.log(search);
    console.log(jobStatus);
  };

  return (
    <form
      className="mb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-3 bg-muted p-8 rounded"
      onSubmit={handleSubmit}
    >
      <Input type="text" placeholder="Search Jobs" name="search" />
      <Select name="jobStatus">
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
