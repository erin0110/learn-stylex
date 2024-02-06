import * as stylex from "@stylexjs/stylex";
import Button from "./components/Button";
import { buttonTokens } from "./components/ButtonTokens.stylex";

const DARK_MODE = "@media (prefers-color-scheme: dark)";

const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 20,
  },
});

const buttonStyles = stylex.create({
  red: {
    backgroundColor: "red",
    color: "blue",
  },
});

const corporateTheme = stylex.createTheme(buttonTokens, {
  bgColor: {
    default: "black",
    [DARK_MODE]: "white",
  },
  textColor: {
    default: "white",
    [DARK_MODE]: "red",
  },
  cornerRadius: "4px",
  paddingBlock: "4px",
  paddingInline: "4px",
});

export default function Home() {
  return (
    <main {...stylex.props(s.main)}>
      {/* <main {...stylex.props(corporateTheme, s.main)}> */}
      {/* corporateTheme을 적용하면, 스타일이 적용되지 않은 첫번째 Button은 자동으로 corporateTheme의 스타일이 적용됨 */}
      <h1>Hello</h1>
      <Button>Base Button</Button>
      <Button emphasized>Bold Button</Button>
      <Button style={buttonStyles.red}>Red Button</Button>
      <Button theme={corporateTheme}>Corporate Button</Button>
    </main>
  );
}
