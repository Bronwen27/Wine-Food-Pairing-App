import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./TeamPage.css";

const TeamPage = () => {
  return (
    <Container
      maxWidth="1"
      sx={{ height: "100vh", width: "100%" }}
      className="containerClass"
    >
      <br />
      <br />
      <h1>Meet the Team</h1>
      <br />
      <br />
      <br />
      <br />

      <Grid container spacing={2} sx={{ margin: 0}}>
        <Grid xl={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            //   height: "100%",
              flexDirection: "column",
            }}
          >
            <img className="profilePictures" src="https://via.placeholder.com/360x360" alt="" />
            <h2>Blago Dishkov</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </Box>
        </Grid>
        <Grid xl={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            //   height: "100%",
              flexDirection: "column",
            }}
          >
            <img className="profilePictures" src="https://via.placeholder.com/360x360" alt="" />
            <h2>Gellert Eke</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </Box>
        </Grid>
        <Grid xl={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            //   height: "100%",
              flexDirection: "column",
            }}
          >
            <img className="profilePictures" src="https://via.placeholder.com/360x360" alt="" />
            <h2>Bronwen Jenner</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamPage;