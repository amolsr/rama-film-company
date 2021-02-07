import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10, 0),
  },
  icon: {
    display: "inline-block",
    width: "40px",
    height: "40px",
    fontSize: "18px",
    borderColor: "#ff7902",
    color: "#ff7902",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "36px",
    marginRight: "10px",
    marginBottom: "10px",
  },
}));

export default function Contact() {
  const classes = useStyle();
  return (
    <Box>
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
          <Typography variant="h3" gutterBottom>
            CONTACT US <span style={{ color: "#ff7902" }}> TODAY NOW</span>
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                <p style={{ display: "flex" }}>
                  <PhoneIcon className={classes.icon} />
                  +91-9958683725
                  <br />
                  +91-9818434636
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                <p style={{ display: "flex" }}>
                  <EmailIcon className={classes.icon} />
                  info@ramafilmcompany.com <br />
                  enquiry@ramafilmcompany.com
                </p>
              </Typography>
            </Grid>
            {/* <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <img
                    src={process.env.PUBLIC_URL + "/image/13.jpg"}
                    alt="sect1"
                    className={classes.card}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src={process.env.PUBLIC_URL + "/image/14.jpg"}
                    alt="sect1"
                    className={classes.card}
                  />
                </Grid>
              </Grid> */}
          </Grid>
        </Grid>

        <Grid item component={Paper} md={12} lg={6}>
          {" "}
          <Typography variant="h4" gutterBottom>
            WHAT WOULD YOU LIKE TO TALK ABOUT
          </Typography>
          <Typography variant="h5" style={{ color: "#ff7902" }}>
            We'd Love to Hear From you !
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item xs={12} md={6} compoent={TextField}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  fullWidth
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#ff7902", color: "white" }}
                >
                  Submit Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
