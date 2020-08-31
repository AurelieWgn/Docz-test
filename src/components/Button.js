/** @jsx jsx */
import { jsx } from "@emotion/core";

import Theme from "../Utils/Theme";
import t from "prop-types";

// components
import Link from "./Link";

// utils
import { darken } from "../Utils/functions";

let colors = Theme.colors;

const sizeStyle = {
  xsmall: {
    padding: "3px 15px",
  },
  small: {
    padding: "5px 20px",
  },
  medium: {
    padding: "12px 20px",
  },
  large: {
    padding: "14px 20px",
  },
};

const fontStyle = {
  xsmall: {
    fontSize: "9px",
  },
  small: {
    fontSize: "12px",
  },
  medium: {
    fontSize: "18px",
    fontWeight: 500,
  },
  large: {
    fontSize: "15px",
  },
};

const Button = ({
  size = "medium",
  transparent,
  black,
  ghost,
  to,
  alt,
  enabled,
  color,
  disabled,
  children,
  ...rest
}) => {
  const defaultColor = black ? colors.black : color ? color : colors.primary;

  const disabledStyle = {
    backgroundColor: colors.mediumGray,
  };

  const initialStyle = {
    display: "inline-block",
    cursor: disabled ? "default" : "pointer",
    textDecoration: "none",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "25px",
    marginRight: "5px",
  };

  const transparentStyle = {
    ...sizeStyle[size],
    ...fontStyle[size],
    position: "relative",
    color: defaultColor,
    borderColor: "transparent",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
    },
  };

  const ghostStyle = {
    backgroundColor: enabled ? defaultColor : "transparent",
    color: enabled ? colors.white : defaultColor,
    borderColor: enabled ? colors.white : defaultColor,
    ...sizeStyle[size],
    ...fontStyle[size],
    transition: "background-color 0.2s",
    ...(disabled
      ? {}
      : {
          "&:hover": {
            backgroundColor: darken(enabled ? defaultColor : colors.white, 15),
          },
        }),
  };

  const basicStyle = {
    backgroundColor: defaultColor,
    color: colors.white,
    transition: "background-color 0.2s",
    borderColor: "transparent",
    ...sizeStyle[size],
    ...fontStyle[size],
    ...(!disabled
      ? {
          "&:hover": {
            backgroundColor: darken(defaultColor, 20),
          },
        }
      : { ...disabledStyle }),
  };

  const getTypeStyle = () => {
    if (transparent) return transparentStyle;
    if (ghost) return ghostStyle;
    return basicStyle;
  };

  const styles = {
    ...initialStyle,
    ...getTypeStyle(),
  };

  if (to && !disabled) {
    return (
      <Link {...rest} to={to} css={styles}>
        {children}
      </Link>
    );
  } else {
    return (
      <span {...rest} css={styles}>
        {children}
      </span>
    );
  }
};

Button.prototype = {
  size: t.oneOf(["xsmall", "small", "medium", "large"]),
  //   black: t.oneOf([true, false]),
  //   transparent: t.oneOf([true, false]),
};
Button.defaultProps = {
  size: "medium",
  //   black: false,
};

export { Button };
