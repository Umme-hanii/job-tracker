"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateAndEditJobType,
  JobMode,
  JobStatus,
  createAndEditJobSchema,
} from "@/utils/types";
import { getJobAction, updateJobAction } from "@/utils/actions";

import { CustomFormField, CustomSelectField } from "./FormComponents";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const EditJobForm = ({ id }: { id: string }) => {
  const { data } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getJobAction(id),
  });

  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: data?.position,
      company: data?.company,
      location: data?.location,
      status: (data?.status as JobStatus) || JobStatus.Pending,
      mode: (data?.mode as JobMode) || JobMode,
    },
  });

  const { toast } = useToast();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => updateJobAction(id, values),
    onSuccess: (data) => {
      console.log("inside success after update", data);
      if (!data) {
        toast({ description: "There was an error updating the job details" });
        return;
      }
      toast({
        description: "Updated the job details",
      });
      router.push("/jobs");
    },
  });

  if (isPending) {
    return <h1>Updating job details...</h1>;
  }

  function onSubmit(values: CreateAndEditJobType) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-bold text-3xl">edit job details</h2>
        <div className="my-3 grid gap-3 grid-cols-2 lg:grid-cols-3 items-center">
          <CustomFormField name="position" control={form.control} />
          <CustomFormField name="company" control={form.control} />
          <CustomFormField name="location" control={form.control} />

          <CustomSelectField
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />
          <CustomSelectField
            name="mode"
            control={form.control}
            labelText="job mode"
            items={Object.values(JobMode)}
          />
          <Button
            type="submit"
            className="self-end capitalize"
            disabled={isPending}
          >
            edit job
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditJobForm;
