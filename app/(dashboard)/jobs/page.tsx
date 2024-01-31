import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

import JobsList from "@/components/JobsList";
import SearchForm from "@/components/SearchForm";

import { getAllJobsAction } from "@/utils/actions";

const JobsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobsList />
    </HydrationBoundary>
  );
};

export default JobsPage;
