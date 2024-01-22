import * as z from "zod";

export type JobType = {
  id: string;
  updatedAt: Date;
  createdAt: string;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Contract = "contract",
}

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: "position must be atleast 2 characters.",
  }),
  company: z.string().min(2, {
    message: "company must be atleast 2 characters.",
  }),
  location: z.string().min(2, {
    message: "position must be atleast 2 characters.",
  }),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
});

export type createAndEditJobType = z.infer<typeof createAndEditJobSchema>;
