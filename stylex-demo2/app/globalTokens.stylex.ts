import * as stylex from "@stylexjs/stylex";

const DARK_MODE = "@media (prefers-color-scheme: dark)";
const MIN_WIDTH = 320;
const MAX_WIDTH = 1120;

export const colors = stylex.defineVars({
  title: { default: "#000", [DARK_MODE]: "#fff" },
  subtitle: { default: "#888", [DARK_MODE]: "#888" },
  textBody: { default: "#666", [DARK_MODE]: "#888" },
  primaryButton: { default: "#6200EE", [DARK_MODE]: "#BB86FC" },
  primaryButtonHover: { default: "#3700B3", [DARK_MODE]: "#3700B3" },
  secondaryButton: { default: "#03DAC6", [DARK_MODE]: "#03DAC6" },
  secondaryButtonHover: { default: "#018786", [DARK_MODE]: "#03DAC6" },
  background: { default: "#f3f3f3", [DARK_MODE]: "#252525" },
  lineColor: { default: "#eeeeee", [DARK_MODE]: "#252525" },
  white: { default: "#fff", [DARK_MODE]: "rgba(255,255,255,0.1)" },
});

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});

export const typo = stylex.defineVars({
  lv1: "12px",
  lv2: "14px",
  lv3: "16px",
  lv4: "18px",
  lv5: "24px",
  lv6: "28px",
  lv7: "32px",
  lv8: "42px",
  lv9: "64px",
  lv10: "128px",
});

export const shadow = stylex.defineVars({
  ev1: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  ev2: "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
  ev3: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
  ev4: "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
  ev5: "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
});

export const globalTokens = stylex.defineVars({
  minWidth: `${MIN_WIDTH}px`,
  maxWidth: `${MAX_WIDTH}px`,
});
