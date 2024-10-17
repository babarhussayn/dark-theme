"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type MainWrapeProps = {
  children: React.ReactNode;
};

const MainWrape: React.FC<MainWrapeProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainWrape;
