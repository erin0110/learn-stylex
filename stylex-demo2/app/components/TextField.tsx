import * as stylex from "@stylexjs/stylex";
import { colors, spacing, typo } from "../globalTokens.stylex";

type Props = Readonly<{
  type: string;
  placeholder: string;
  children?: string;
  maxLength?: number;
  isError?: boolean;
  isDisabled?: boolean;
}>;

const DARK_MODE = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
  base: {
    display: "block",
    width: "100%",
    appearance: "none",
    fontSize: typo.lv2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: {
      default: "#000",
      [DARK_MODE]: "rgba(255,255,255,0.4)",
    },
    backgroundColor: colors.white,
    borderRadius: spacing.xsmall,
    color: colors.textBody,
    padding: spacing.medium,
  },
  error: {
    borderColor: "red",
  },
  disabled: {
    backgroundColor: "gray",
  },
});

export default function TextField({
  type,
  placeholder,
  children,
  maxLength,
  isError,
  isDisabled,
}: Props) {
  return (
    <input
      {...stylex.props(
        styles.base,
        isError && styles.error,
        isDisabled && styles.disabled
      )}
      type={type}
      placeholder={placeholder}
      value={children}
      maxLength={maxLength}
      disabled={isDisabled}
    />
  );
}
