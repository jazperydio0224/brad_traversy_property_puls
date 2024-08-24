import React from "react";

interface PropertyPageProps {
  params: {
    id: string;
  };
  searchParams: {
    name: string;
  };
}

const PropertyPage = ({ params, searchParams }: PropertyPageProps) => {
  return (
    <div>
      <div>Property Page {params.id}</div>
      <div>Property Page {searchParams.name}</div>
    </div>
  );
};

export default PropertyPage;
