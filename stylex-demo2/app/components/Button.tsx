import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { colors, spacing, typo } from "../globalTokens.stylex";

type Props = Readonly<{
  onClick?: () => void;
  children: React.ReactNode;
  style?: StyleXStyles;
  variant?: "primary" | "secondary";
}>;

const DARK_MODE = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 46,
    fontSize: typo.lv3,
    fontWeight: 500,
    appearance: "none",
    borderWidth: 0,
    borderRadius: spacing.xsmall,
    cursor: "pointer",
  },
});

const variantStyles = stylex.create({
  primary: {
    color: {
      default: "white",
      [DARK_MODE]: "black",
    },
    backgroundColor: {
      default: colors.primaryButton,
      ":hover": colors.primaryButtonHover,
    },
  },
  secondary: {
    color: "black",
    backgroundColor: {
      default: colors.secondaryButton,
      ":hover": colors.secondaryButtonHover,
    },
  },
});

export default function Button({ onClick, children, variant, style }: Props) {
  return (
    <button
      {...stylex.props(styles.base, variant && variantStyles[variant], style)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
