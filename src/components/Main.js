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
        <Box
          my={8}
          style={{ backgroundColor: "#f5f5f0", textAlignLast: "center" }}
        >
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
        <Container>
          <Typography
            variant="h3"
            align="center"
            style={{ margin: "5vh 0vh" }}
            gutterBottom
          >
            OUR <span style={{ color: "#ff7902" }}>SERVICE</span>
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
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/image/core-img/video.png"}
                alt="sect2"
              />
              <Typography variant="h5" gutterBottom>
                VIDEO PRODUCTION
              </Typography>
              <Typography variant="body1" gutterBottom>
                Imaginations look better walking rather than in words. We are
                passionate about making ideas come to life in the best possible
                way. We make sure we take the best shot that can either give
                goosebumps or make you smile. Perfection is in our habit now.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/image/core-img/music.png"}
                alt="sect2"
              />
              <Typography variant="h5" gutterBottom>
                MUSIC PRODUCTION
              </Typography>
              <Typography variant="body1" gutterBottom>
                We know nothing is complete without a good music. So we put the
                best rhythm you ever heard of in our productions. Give your ears
                some pleasure and put the earphones. We bet you would love the
                taste of our music.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/image/core-img/sound.png"}
                alt="sect2"
              />
              <Typography variant="h5" gutterBottom>
                SOUND DESIGNING
              </Typography>
              <Typography variant="body1" gutterBottom>
                You tell the story, we set the tone. Let's your story get heard.
                We make sounds that people know they love but wonder where they
                came from. From delicate mixes to complex audio manipulation, we
                handle the odds and ends of audio. Mastering, mixing, fixing.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/image/core-img/post.png"}
                alt="sect2"
              />
              <Typography variant="h5" gutterBottom>
                POST PRODUCTION
              </Typography>
              <Typography variant="body1" gutterBottom>
                Putting the pieces together for a complete package. We wanna
                make sure that you love what we have done so we deliver the best
                upshot. Though quality takes time, we’ll always deliver your
                project on time, if not early.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/image/core-img/3d.png"}
                alt="sect2"
              />
              <Typography variant="h5" gutterBottom>
                3D & VFX
              </Typography>
              <Typography variant="body1" gutterBottom>
                Putting the pieces together for a complete package. We wanna
                make sure that you love what we have done so we deliver the best
                upshot. Though quality takes time, we’ll always deliver your
                project on time, if not early.
              </Typography>
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <img
                src={process.env.PUBLIC_URL + "/image/core-img/setting.png"}
                alt="sect2"
              />
              <Typography variant="h5" gutterBottom>
                ADVERTISEMENT
              </Typography>
              <Typography variant="body1" gutterBottom>
                You tell the idea you want us to follow, we set the situation.
                Let's your idea be the intermediary between you and your
                targeted consumer. From Flyers, Banners to complex VFX & 3D
                advertisement, we handle the odds and ends of advertisement.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
