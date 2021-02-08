import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";
import "react-slideshow-image/dist/styles.css";
import Header from "./components/_include/_header";
import Footer from "./components/_include/_footer";
import AOS from "aos";
import Portfolio from "./components/Portfolio";

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Main} />
            <Route path="*">
              <h1>Not Found</h1>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 4000));
}

export default App;
