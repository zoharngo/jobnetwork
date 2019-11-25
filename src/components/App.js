import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import SearchPage from "./search/SearchPage";
import { Menu, Header } from "./common";
import PageNotFound from "./PageNotFound";
import MatchesPage from "./matches/MatchesPage";
import { Container, Jumbotron } from "react-bootstrap";
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
    </Container>
  );
}

export default App;
