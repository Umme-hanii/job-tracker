import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

import AllJobs from "@/components/JobsList";
import { getAllJobsAction } from "@/utils/actions";

const JobsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AllJobs />
    </HydrationBoundary>
  );
};

export default JobsPage;
