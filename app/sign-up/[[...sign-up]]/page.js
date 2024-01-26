import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <section className="min-h-screen flex justify-center items-center text-center">
      <SignUp />
    </section>
  );
};

export default SignUpPage;
