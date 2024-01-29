import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

import { deleteJobAction } from "@/utils/actions";

const DeleteJobButton = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (job) => {
      if (!job) {
        toast({
          description: "There was an error deleting the job",
        });
        return;
      }
      toast({
        description: `${job?.position} at ${job?.location} is deleted`,
      });
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
  });

  return (
    <Button size="sm" disabled={isPending} onClick={() => mutate(id)}>
      {isPending ? "deleting..." : "delete"}
    </Button>
  );
};

export default DeleteJobButton;
