import React from "react";
import Header from "./_include/_header";
import Footer from "./_include/_footer";
import { Box } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

export default function Main() {
  var items = [
    process.env.PUBLIC_URL + "/image/1.jpg",
    process.env.PUBLIC_URL + "/image/2.jpg",
    process.env.PUBLIC_URL + "/image/33.jpg",
    process.env.PUBLIC_URL + "/image/ph.jpg",
    process.env.PUBLIC_URL + "/image/pho.jpg",
  ];

  return (
    <div>
      <Header />
      <Box style={{ zIndex: -1, marginTop: "-10vh" }}>
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
      </Box>
      <Footer />
    </div>
  );
}
