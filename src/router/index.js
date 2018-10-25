import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Gallery } from '../containers'

const App  = () => {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
      </div>
    </Router>
    )
}
export default App;