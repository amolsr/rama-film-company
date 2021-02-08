import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import {
  Box,
  Button,
  Hidden,
  IconButton,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbtn: {
    margin: theme.spacing(1, 2),
    "&:hover": {
      color: "#ff7902",
      backgroundColor: "rgb(255, 255, 255, 0.1)",
    },
  },
  logo: {
    paddingTop: theme.spacing(1),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,1)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,0.8)",
      outline: "1px solid slategrey",
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom style={{ zIndex: 3 }} in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function NavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 0,
  });

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(false)}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List component="nav">
        <ListItem
          button
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/portfolio"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar
      elevation={0}
      style={{
        posititon: "absolute",
        backgroundColor: trigger ? "#22222a" : "transparent",
        boxShadow: trigger
          ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
          : undefined,
      }}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <img
            className={classes.logo}
            src={`${process.env.PUBLIC_URL}/image/logo.png`}
            alt="logo"
          />
        </Typography>
        <Hidden mdUp>
          <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
            {list("right")}
          </Drawer>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden smDown>
          <Box>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit" className={classes.navbtn}>
                <Typography variant="h5">Home</Typography>
              </Button>
            </Link>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit" className={classes.navbtn}>
                <Typography variant="h5">Portfolio</Typography>
              </Button>
            </Link>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <>
      <NavBar {...props} />
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
