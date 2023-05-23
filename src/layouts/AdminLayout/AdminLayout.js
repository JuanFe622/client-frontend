import React from "react";

export const AdminLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <h2>AdminLayout works!</h2>
      <div>{children}</div>
    </div>
  );
};