"use server";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prisma from "./db";
import { JobType, createAndEditJobSchema, CreateAndEditJobType } from "./types";

const authenticateAndRedirect = (): string => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return userId;
};

export async function createJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  try {
    const userId = authenticateAndRedirect();
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllJobsAction(): Promise<JobType[]> {
  try {
    const userId = authenticateAndRedirect();
    const jobs: JobType[] = await prisma.job.findMany({
      where: {
        clerkId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return jobs;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deleteJobAction(jobId: string): Promise<JobType | null> {
  try {
    const userId = authenticateAndRedirect();
    const job = await prisma.job.delete({
      where: {
        id: jobId,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getJobAction(jobId: string): Promise<JobType | null> {
  let job: JobType | null = null;
  try {
    const userId = authenticateAndRedirect();
    job = await prisma.job.findUnique({
      where: {
        id: jobId,
        clerkId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    job = null;
  }
  if (!job) {
    redirect("/jobs");
  }
  return job;
}

export async function updateJobAction(
  id: string,
  values: CreateAndEditJobType
): Promise<JobType | null> {
  const userId = authenticateAndRedirect();
  try {
    const job = await prisma.job.update({
      where: {
        id,
        clerkId: userId,
      },
      data: {
        ...values,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
}
