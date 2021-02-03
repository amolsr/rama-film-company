import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 6),
    backgroundColor: "#22222a",
    color: "white",
  },
  divider: {
    background: "white",
    height: "2px",
  },
  copyright: {
    padding: theme.spacing(3, 0),
  },
  grid: {
    backgroundColor: "#22222a",
    height: "40vh",
  },
  icon: {
    display: "inline-block",
    width: "40px",
    height: "40px",
    fontSize: "18px",
    color: "#ffffff",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "36px",
    marginRight: "10px",
    marginBottom: "10px",
    "&:hover, &:focus": {
      borderColor: "#ff7902",
      color: "#ff7902",
    },
  },
}));

export default function _footer() {
  const classes = useStyles();
  return (
    <Grid
      container
      component={Paper}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        container
        style={{
          padding: "10vh 0vh",
        }}
        spacing={7}
      >
        <Grid item sm={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Address
          </Typography>
          <Typography variant="body1" gutterBottom>
            H-322
            <br />
            Devnathpur Laxmanpatti Sant Ravidas Nagar Bhadohi, Uttar Pradesh
            221304, India
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Support
          </Typography>
          <Typography variant="body1" gutterBottom>
            <p style={{ display: "flex" }}>
              <PhoneIcon className={classes.icon} />
              +91-9958683725
              <br />
              +91-9818434636
            </p>
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Social
          </Typography>
          <Typography variant="body1" class="footer-social-info" gutterBottom>
            <a href="https://www.facebook.com/ramafilmcompany">
              <FacebookIcon className={classes.icon} />
            </a>
            <a href="https://twitter.com/ramafilmcompany">
              <TwitterIcon className={classes.icon} />
            </a>
            <a href="https://www.youtube.com/channel/UC9ZJKFdIHdl6HalLzS-s0kg">
              <YouTubeIcon className={classes.icon} />
            </a>
            <a href="https://www.instagram.com/ramafilmcompany/">
              <InstagramIcon className={classes.icon} />
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider variant="fullWidth" className={classes.divider} />
        <Typography
          variant="body2"
          align="center"
          className={classes.copyright}
        >
          Copyright © All rights reserved | Rama Film Company
        </Typography>
      </Grid>
    </Grid>
  );
}
