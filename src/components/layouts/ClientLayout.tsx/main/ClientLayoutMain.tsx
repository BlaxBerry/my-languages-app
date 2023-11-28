import { memo, type ReactNode } from "react";
import Container from "@mui/material/Container";
import styles from "@/styles/_variables.module.scss";

const MAIN_HEIGHT = styles.root_layout_main_height;

function ClientLayoutMain(props: { children: ReactNode }) {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        height: MAIN_HEIGHT,
        p: 2,
      }}
    >
      {props.children}
    </Container>
  );
}

const ClientLayoutMainMemo = memo(ClientLayoutMain);
export default ClientLayoutMainMemo;
