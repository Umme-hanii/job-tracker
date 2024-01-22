"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import {
  JobMode,
  JobStatus,
  createAndEditJobSchema,
  createAndEditJobType,
} from "@/utils/types";
import { CustomFormField, CustomSelectField } from "./FormComponents";

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

  //Define Submit Handler
  function onSubmit(values: createAndEditJobType) {
    console.log(values);
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
          <Button type="submit">Create jOB</Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateJobForm;
