import React from "react";
import Link from "next/link";

// components
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href={{ pathname: "properties" }}>Go to Properties</Link>
    </div>
  );
};

export default HomePage;
