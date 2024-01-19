import { UserButton } from "@clerk/nextjs";

const MemberProfile = async () => {
  return <UserButton afterSignOutUrl="/" />;
};

export default MemberProfile;
