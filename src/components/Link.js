/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link as PureLink, Router } from "react-router-dom";

const Link = ({ to, children, ...rest }) => {
  if (to)
    return (
      <PureLink to={to} {...rest}>
        {children}
      </PureLink>
    );
  else return <div {...rest}>{children}</div>;
};

export default Link;
