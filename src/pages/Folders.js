import React from "react";

import { useParams } from "react-router-dom";

const Folders = () => {
  const { folder } = useParams();
  return (
    <>
      <div>{folder}</div>
    </>
  );
};

export default Folders;
