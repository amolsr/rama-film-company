import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Team() {
  const team = [
    {
      name: "Ramraj Shrestha",
      position: "Film And Video Director & Editor",
      image: process.env.PUBLIC_URL + "/image/13.jpg",
    },
    {
      name: "Shivraj Shrestha",
      position: "Music Director & Sound Engineer",
      image: process.env.PUBLIC_URL + "/image/14.jpg",
    },
    {
      name: "Sudip Sarkar",
      position: "3D & VFX Supervisor",
      image: process.env.PUBLIC_URL + "/image/15.jpg",
    },
    {
      name: "Vijay Kumar",
      position: "3D & Visual Effects Artist",
      image: process.env.PUBLIC_URL + "/image/16.jpg",
    },
    {
      name: "Kartik Tomar",
      position: "Production Head & Manager",
      image: process.env.PUBLIC_URL + "/image/17.jpg",
    },
    {
      name: "Devraj Shreshtha",
      position: "Content Creator & Marketing Head",
      image: process.env.PUBLIC_URL + "/image/18.jpg",
    },
  ];
  return (
    <Box my={8} style={{ textAlignLast: "center" }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          OUR <span style={{ color: "#ff7902" }}> TEAM</span>
        </Typography>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={6}
          style={{
            margin: "5vh 0vh",
            width: "100%",
            textAlignLast: "center",
          }}
        >
          {team.map((item, i) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <div class="card">
                <div class="imgBx">
                  <img src={item.image} alt="images" />
                </div>
                <div class="details">
                  <h2>
                    {item.name}
                    <br />
                    <span>{item.position}</span>
                  </h2>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
