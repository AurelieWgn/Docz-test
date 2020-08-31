/** @jsx jsx */
import { jsx } from "@emotion/core";
import Theme from "../Utils/Theme";
import React from "react";
import t from "prop-types";

const SuperText = React.forwardRef(
  ({ tag: Tag, size, css, mb, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        css={{
          fontFamily: "Gotham",
          fontStyle: "normal",
          marginTop: 0,
          marginBottom: mb,
          ...Theme.typos[size || Tag],
          ...css,
        }}
        {...props}
      />
    );
  }
);

SuperText.defaultProps = {
  tag: "span",
  mb: 0,
};

SuperText.h1 = (props) => <SuperText tag="h1" size="typo1" {...props} />;
SuperText.h2 = (props) => <SuperText tag="h2" size="typo2" {...props} />;
SuperText.h3 = (props) => <SuperText tag="h3" size="typo3" {...props} />;
SuperText.h4 = (props) => <SuperText tag="h4" size="typo4" {...props} />;
SuperText.h5 = (props) => <SuperText tag="h5" size="typo5" {...props} />;
SuperText.h6 = (props) => <SuperText tag="h6" size="typo6" {...props} />;
SuperText.p = (props) => <SuperText tag="p" size="typo20" {...props} />;
SuperText.div = (props) => <SuperText tag="div" size="typo20" {...props} />;
SuperText.menu = (props) => <SuperText tag="span" size="typo4" {...props} />;
SuperText.menuItem = (props) => (
  <SuperText tag="span" size="typo20" {...props} />
);
SuperText.breadcrumb = (props) => (
  <SuperText tag="span" size="typo11" {...props} />
);

SuperText.propTypes = {
  tag: t.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span"]),
  size: t.oneOf([
    "typo1",
    "typo2",
    "typo3",
    "typo4",
    "typo5",
    "typo6",
    "typo20",
    "typo19",
  ]),
};

SuperText.defaultProps = {
  tag: "p",
  size: "typo19",
};

export { SuperText };
