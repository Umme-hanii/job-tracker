"use client";

import { useQuery } from "@tanstack/react-query";

import { getJobAction } from "@/utils/actions";

const EditJobForm = ({ id }: { id: string }) => {
  const { data, isPending } = useQuery({
    queryKey: ["job"],
    queryFn: () => getJobAction(id),
  });

  if (isPending) {
    return (
      <div className="capitalize">
        <h1>Loading job details...</h1>
      </div>
    );
  }
  return <div>EditJobForm</div>;
};

export default EditJobForm;
