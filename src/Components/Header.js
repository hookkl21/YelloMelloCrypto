import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../context/CryptoContext";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    fontWeight: "bold",
    cursor: "pointer",
  },
  header: {
    background: "#101069",
  },
}));

function Header() {
  const classes = useStyle();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#d8d8d8",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="transparent">
        <div className={classes.header}>
          <Container>
            <Toolbar>
              <Typography
                className={classes.title}
                onClick={() => navigate("/")}
                variant="h6"
              >
                MelloYello Crypto
              </Typography>
              <Select
                variant="outlined"
                style={{ width: 100, height: 40, marginRight: 15 }}
                value={currency}
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"JPY"}>JPY</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </div>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
