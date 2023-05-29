import React from "react";

export const ClientLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <center>
      <h2>Bienvenido a MAP</h2>
      <div>{children}</div>
      </center>
    </div>
  );
};