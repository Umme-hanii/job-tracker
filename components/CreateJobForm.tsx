"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import {
  JobMode,
  JobStatus,
  JobType,
  createAndEditJobSchema,
  createAndEditJobType,
} from "@/utils/types";
import { CustomFormField, CustomSelectField } from "./FormComponents";
import { useToast } from "./ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { createJobAction } from "@/utils/actions";

const CreateJobForm = () => {
  // Define form
  const form = useForm<createAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
    },
  });

  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: createAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: "There was an error",
        });
        return;
      }
      toast({ description: "job created" });
    },
  });

  //Define Submit Handler
  function onSubmit(values: createAndEditJobType) {
    mutate(values);
    // toast({
    //   title: "Clicked on submit",
    //   description: "Umme Hani",
    // });
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-bold text-3xl">add job</h2>
        <div className="my-3 grid gap-3 grid-cols-2 lg:grid-cols-3 items-center ">
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
            Create job
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateJobForm;
