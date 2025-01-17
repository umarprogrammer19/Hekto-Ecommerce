import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Login = () => {
  return (
    <section className="my-20  set_lato ">
      <div className="md:max-w-[70%] mx-auto flex justify-center items-center">
        <div className="shadow-2xl flex flex-col gap-4">
          <div className="w-full p-4 md:px-28  shadow-md rounded-[7px]">
            <h2 className="text-3xl text-center my-4 text-neutral-800 dark:text-neutral-200 font-bold">
              Login
            </h2>
            <p className="text-sm text-center text-[#9096B2]">
              Please login using account detail bellow.
            </p>
            <form className="my-12">
              <LabelInputContainer className="mb-8">
                <Input
                  placeholder="Email Address"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8 relative">
                <Input
                  placeholder="Password"
                  type={"password"}
                />
              </LabelInputContainer>
              <h6 className=" text-sm my-2">
                <Link href="/forgot-password">Forgot your password?</Link>
              </h6>
              <Button
                className="w-full bg-[#FB2E86] text-white"
                type="submit"
                size={"lg"}
                variant={"outline"}
              >
                Sign In &rarr;
                <BottomGradient />
              </Button>
              <h2 className="text-center mt-4 text-[#9096B2]">
                Don&apos;t have an Account? Create account{" "}
                
              </h2>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Login;
