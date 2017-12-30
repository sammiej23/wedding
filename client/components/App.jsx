import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Menu from './Menu.jsx';
import Home from './Home.jsx';
import OurStory from './OurStory.jsx';
import Details from './Details.jsx';
import RSVP from './RSVP.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import '../styles/defaults.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
       <div>
          <Menu />
          <main>
            <Route path="/" component={Home} exact={true} />
            <Route path="/Home" component={Home} />
            <Route path="/OurStory" component={OurStory} />
            <Route path="/Details" component={Details} />
            <Route path="/RSVP" component={RSVP} />
            <Route path="/PhotoGallery" component={PhotoGallery} />
          </main>
        </div>
      </Router>
    );
  }
}
