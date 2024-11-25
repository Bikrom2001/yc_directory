import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <>
      <section>Page id number : {id}</section>
    </>
  );
};
export default Page;
