import * as stylex from "@stylexjs/stylex";
import {
  globalTokens as $,
  colors,
  shadow,
  spacing,
  typo,
} from "../../globalTokens.stylex";

const s = stylex.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: colors.background,
  },
  section: {
    maxWidth: 400,
    minWidth: $.minWidth,
    flex: "1 1 auto",
    textAlign: "center",
    backgroundColor: "white",
    padding: spacing.xlarge,
    marginBottom: spacing.xlarge,
    boxShadow: shadow.ev3,
  },
  title: {
    fontSize: typo.lv5,
    color: colors.title,
    marginBottom: spacing.xlarge,
  },
});

export default function Home() {
  return (
    <main {...stylex.props(s.main)}>
      <section {...stylex.props(s.section)}>
        <h1 {...stylex.props(s.title)}>Home</h1>
      </section>
    </main>
  );
}
