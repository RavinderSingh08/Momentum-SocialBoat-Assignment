import {
  AppBar,
  Avatar,
  Container,
  createTheme,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import profilepic from "../../Assets/profile.jpg";
import Content from "../Content/Content";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#d9b08c",
      },
      secondary: { main: "#106466" },
      type: "dark",
    },
  });

  const inputEvent = (e) => {
    const data = e.target.value;
    // console.log(data);
    setSearchText(data);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="secondary" position="sticky">
        <Container>
          <Toolbar>
            <Typography>LOGO</Typography>
            <div
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "right",
                marginInline: "15px",
              }}
            >
              <TextField
                // style={{ flex: 1}}
                className="searchBox"
                color="primary"
                label="Search..."
                type="search"
                size="small"
                variant="outlined"
                value={searchText}
                onChange={inputEvent}
              />
            </div>
            <Avatar
              style={{
                height: 38,
                width: 38,
                cursor: "pointer",
                backgroundColor: "#EEBC1D",
              }}
              src={profilepic}
              alt="Ravinder Singh"
            />
          </Toolbar>
        </Container>
      </AppBar>
      {searchText === "" ? null : <Content name={searchText} />}
    </ThemeProvider>
  );
};

export default Header;
