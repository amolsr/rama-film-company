import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  img: { maxWidth: "100%", maxHeight: "100%" },
}));

export default function About() {
  const classes = useStyle();

  return (
    <Box my={8} style={{ backgroundColor: "#f5f5f0", textAlignLast: "center" }}>
      <Container>
        <Grid
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
              src={process.env.PUBLIC_URL + "/image/phot.jpg"}
              alt="sect1"
              className={classes.img}
            />
          </Grid>
          <Grid item md={12} lg={6}>
            <Typography variant="h3" align="center" gutterBottom>
              ABOUT <span style={{ color: "#ff7902" }}> US</span>
            </Typography>
            <Typography variant="body1" align="justify">
              Rama Film Company is an Indian film Production company, owned by
              DDRS Brothers its wholly owned subsidiary DDRS Group, and is one
              of Bollywood's "Big Six" film studios. Its production company &
              studios are at Ashram marg Sant Ravidas nagar, Utar Pradesh,
              India. Distribution and other corporate offices are in Ghaziabad,
              Delhi NCR. Rama Film Company (RFC) is a member of the Motion
              Picture Association of Indis(MPAI). Rama Film Company was founded
              in 2018 by the Dharmraj Shrestha, Devraj Shrestha, Ramraj
              Shrestha, Shivraj Shrestha. It is the India's Top film Production
              Company & studio. RFC has formed a full-fledged film studio in
              India. The studio's activities span across creative development,
              production, marketing, distribution, licensing, merchandising and
              syndication of films in India and worldwide. They are also a
              premier visual effects company. Throughout the last several years,
              Rama Film Company (RFC) has acquired the rights to several
              Bollywood films.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
