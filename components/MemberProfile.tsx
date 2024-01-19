// import { currentUser } from "@clerk/nextjs";

import { UserButton } from "@clerk/nextjs";

const MemberProfile = async () => {
  // const user = await currentUser();
  return <UserButton />;
};
export default MemberProfile;
