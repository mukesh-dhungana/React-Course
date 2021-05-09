import React from "react";
import Menu from "./Menu";

const Layout = ({
  title = "Title",
  description = "This is description",
  className,
  children,
}) => {
  return (
    <>
      <Menu />
      <div>
        <div className="jumbotron">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
