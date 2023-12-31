import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { colors } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "@/styles/_variables.module.scss";
import NavPCMenuMemo from "./NavPCMenu";
import NavMobileMenu from "./NavMobileMenu";

const HEADER_HEIGHT = styles.root_layout_header_height;
const ASIDE_WITH = styles.root_layout_aside_with;

function RootLayoutHeader() {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="sticky"
      sx={{
        height: HEADER_HEIGHT,
        bgcolor: colors.blueGrey[500],
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* mobile screen go back button */}
        <ArrowBackIcon
          onClick={() => window.history.back()}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            mr: 2,
            opacity: pathname === "/" ? 0 : 1,
            cursor: "pointer",
          }}
        />

        {/* title */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            width: ASIDE_WITH,
            textAlign: {
              xs: "left",
              sm: "center",
            },
          }}
        >
          <Link to={"/"}>Languages App</Link>
        </Typography>

        {/* PC screen menu */}
        <NavPCMenuMemo />
        <div style={{ flexGrow: 1 }} />
        {/* mobile screen dropdown menu */}
        <NavMobileMenu />
      </Container>
    </AppBar>
  );
}

const RootLayoutHeaderMemo = memo(RootLayoutHeader);
export default RootLayoutHeaderMemo;
