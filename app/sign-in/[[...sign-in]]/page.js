import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <section className="min-h-screen flex justify-center items-center text-center">
      <SignIn />
    </section>
  );
};

export default SignInPage;
