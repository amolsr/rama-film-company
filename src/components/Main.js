import React from "react";
import Header from "./_include/_header";
import Footer from "./_include/_footer";
import { Box, Button, Container } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

export default function Main() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <div>
      <Header />

      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Box my={2}>
        {[...new Array(122)]
          .map(
            () =>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. `
          )
          .join("\n")}
      </Box>
      <Footer />
    </div>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
