import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import SearchPage from "./search/SearchPage";
import { Menu, Header } from "./common";
import PageNotFound from "./PageNotFound";
import MatchesPage from "./matches/MatchesPage";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// /#e9ecef
function App() {
  return (
    <Container className="p-0">
      <Header />
      <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/matches" component={MatchesPage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
    </Container>
  );
}

export default App;
