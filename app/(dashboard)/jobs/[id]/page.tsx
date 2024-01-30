import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

import { getJobAction } from "@/utils/actions";
import EditJobForm from "@/components/EditJobForm";

const SingleJobPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["job", params.id],
    queryFn: () => getJobAction(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm id={params.id} />
    </HydrationBoundary>
  );
};

export default SingleJobPage;
