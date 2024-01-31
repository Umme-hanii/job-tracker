"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { JobStatus } from "@/utils/types";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "";

  const router = useRouter();
  const pathname = usePathname();

  const items = ["all", ...Object.values(JobStatus)];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;

    let params = new URLSearchParams();
    params.set("search", search);
    params.set("jobStatus", jobStatus);

    router.push(`${pathname}?${params.toString()}`);

    console.log(pathname);
    console.log(search);
    console.log(jobStatus);
  };

  return (
    <form
      className="mb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-3 bg-muted p-8 rounded"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Search Jobs"
        name="search"
        defaultValue={search}
      />
      <Select name="jobStatus" defaultValue={jobStatus}>
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
