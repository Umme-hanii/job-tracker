import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

import AllJobs from "@/components/JobsList";
import { getAllJobsAction } from "@/utils/actions";
import SearchForm from "@/components/SearchForm";

const JobsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <AllJobs />
    </HydrationBoundary>
  );
};

export default JobsPage;
