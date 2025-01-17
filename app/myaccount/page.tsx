import Login from "@/components/Login";
import Logos from "@/components/Logos";
import Heading from "@/components/Heading"
import React from "react";


const LoginPage = () => {
  return (
    <main>
      <Heading heading="My Account" path1="Home" path2="Pages" path3="My Account" />
      <Login  />
      <Logos />
    </main>
  );
};

export default LoginPage;
