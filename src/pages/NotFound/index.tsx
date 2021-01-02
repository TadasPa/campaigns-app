import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../../routing/constants";

const NotFound = () => {
  return (
    <>
      Page doesn't exist try <Link to={PAGES.home}>home page</Link>
    </>
  );
};

export default NotFound;
