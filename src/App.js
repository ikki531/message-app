import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TalkRoomList from "./pages/TalkRoomList";
import TalkRoom from "./pages/TalkRoom";

import "./styles/style.css";

// styled-components用のreset.css
import { Reset } from "styled-reset";

const App = () => {
  return (
    <>
      {/* reset.css */}
      <Reset />
      <Router>
        <Switch>
          <Route exact path="/" component={TalkRoomList} />
          <Route exact path="/talkroom" component={TalkRoom} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
