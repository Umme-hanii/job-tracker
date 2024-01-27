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
