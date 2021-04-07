import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect } from "react";

const SignIn = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  }, [router]);
  return (
    <div className="bg-yellow-50 w-full h-screen flex flex-col items-center justify-center">
      <section className="w-120 h-120 bg-red-100 flex flex-col items-center justify-center">
        <h1 className="text-6xl Montserrat-medium text-yellow-500">
          Hello World!
        </h1>
        <p>Login to your</p>
        <div></div>
      </section>
      <div
        className="absolute top-5 left-5 cursor-pointer"
        onClick={router.back}
      >
        <img src="/img/return.svg" alt="return" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default SignIn;
