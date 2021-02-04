import React from "react";
import Header from "./_include/_header";
import Footer from "./_include/_footer";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const useStyle = makeStyles((theme) => ({
  img: { maxWidth: "100%", maxHeight: "100%" },
}));

export default function Main() {
  var items = [
    process.env.PUBLIC_URL + "/image/1.jpg",
    process.env.PUBLIC_URL + "/image/2.jpg",
    process.env.PUBLIC_URL + "/image/33.jpg",
  ];
  const classes = useStyle();
  return (
    <div>
      <Header />
      <Box
        style={{ zIndex: -1, marginTop: "-10vh", backgroundColor: "#f5f5f0" }}
      >
        <Carousel animation="fade">
          {items.map((item, i) => (
            <div
              style={{
                backgroundImage: `url(${item})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
              }}
            ></div>
          ))}
        </Carousel>
        <Box my={8} style={{ backgroundColor: "#f5f5f0" }}>
          <Container>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                spacing={6}
                style={{
                  margin: "5vh 0vh",
                  width: "100%",
                }}
              >
                <Grid item md={12} lg={6}>
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + "/image/ph.jpg"}
                    alt="sect1"
                    className={classes.img}
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <Typography variant="h3" align="center" gutterBottom>
                    OUR <span style={{ color: "#ff7902" }}> AGENDA</span>
                  </Typography>
                  <Typography variant="body1" align="justify">
                    Pick up a camera. Shoot something. no matter how small no
                    matter how cheesy no matter whether your frineds and your
                    sister star in it. Put your name on it as director. Now
                    you're a director. Everything after that you're just
                    negotiating your budget and your fee.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                spacing={6}
                style={{
                  margin: "5vh 0vh",
                  width: "100%",
                }}
              >
                <Box clone order={{ xs: 2, sm: 1 }}>
                  <Grid item md={12} lg={6}>
                    <Typography variant="h3" align="center" gutterBottom>
                      WHO WE <span style={{ color: "#ff7902" }}>ARE ?</span>
                    </Typography>
                    <Typography variant="body1" align="justify">
                      Because we know you gonna love us. We are definitely a
                      fun, talented bunch of young peers working together to
                      make you love us. Moreover, a professional and tight-knit
                      video production company. You will always see us packed
                      with some enthusiasm ready to be launched. Our team have a
                      multitude of skills. Some of us love fiction, some love
                      action and drones, some love comedy, and some of us love
                      just brainstorming the next big idea – staying at the
                      vanguard of video trends. But the thing that is common in
                      all of us or what makes us, “US” is passion. We all love
                      what we do. Believe us, we have imagined beyond the five
                      elements earth consists of. We are a team of proven,
                      creative professionals brought together by
                      <b> RAMA FILM COMPANY</b>, a creative self-made company.
                    </Typography>
                  </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2 }}>
                  <Grid item md={12} lg={6}>
                    <img
                      src={process.env.PUBLIC_URL + "/image/pho.jpg"}
                      alt="sect2"
                      className={classes.img}
                    />
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
