import * as stylex from "@stylexjs/stylex";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
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
    backgroundColor: colors.white,
    padding: spacing.xlarge,
    marginBottom: spacing.xlarge,
    boxShadow: shadow.ev3,
  },
  title: {
    fontSize: typo.lv5,
    color: colors.title,
    marginBottom: spacing.xlarge,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    rowGap: spacing.small,
  },
  button: {
    marginTop: spacing.medium,
  },
});

export default function Login() {
  return (
    <main {...stylex.props(s.main)}>
      <section {...stylex.props(s.section)}>
        <h1 {...stylex.props(s.title)}>로그인</h1>
        <div {...stylex.props(s.form)}>
          <TextField type="text" placeholder="아이디를 입력하세요."></TextField>
          <TextField
            type="password"
            placeholder="비밀번호를 입력하세요."
          ></TextField>
        </div>
        <Button variant="primary" style={s.button}>
          LOGIN
        </Button>
      </section>
    </main>
  );
}
