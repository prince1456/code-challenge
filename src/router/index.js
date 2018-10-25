import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Gallery, SecondGallery } from '../containers'

const App  = () => {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/second-gallery" component={SecondGallery} />
      </div>
    </Router>
    )
}
export default App;