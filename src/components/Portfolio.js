import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
const useStyle = makeStyles((theme) => ({
  img: { maxWidth: "100%", maxHeight: "100%" },
  video: {
    maxWidth: "90%",
    maxHeight: "90%",
  },
}));
export default function Portfolio() {
  const classes = useStyle();
  return (
    <Box style={{ zIndex: -1, marginTop: "-10vh" }}>
      <div
        style={{
          zIndex: -1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/image/8.jpg"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50vh",
          width: "100%",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#ff7902" }}>OUR PORTFOLIO</h1>
      </div>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            margin: "5vh 0vh",
            width: "100%",
          }}
        >
          <Grid item md={12} lg={6}>
            <ReactPlayer
              className={classes.video}
              url="https://www.youtube.com/watch?v=7n7ospBeUwQ"
            />
          </Grid>
          <Grid item md={12} lg={6}>
            <Container>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                style={{ textTransform: "uppercase" }}
              >
                Musafir <span style={{ color: "#ff7902" }}> teaser</span>
              </Typography>
              <Typography variant="body1" align="justify">
                Pick up a camera. Shoot something. no matter how small no matter
                how cheesy no matter whether your frineds and your sister star
                in it. Put your name on it as director. Now you're a director.
                Everything after that you're just negotiating your budget and
                your fee.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
