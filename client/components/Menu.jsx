import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Menu extends React.Component {

  render() {
    return (
      <section>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/OurStory'>OurStory</Link></li>
            <li><Link to='/Details'>Details</Link></li>
            <li><Link to='/RSVP'>RSVP</Link></li>
            <li><Link to='/PhotoGallery'>PhotoGallery</Link></li>
          </ul>
        </nav>
      </section>
    );
  }
};

export default Menu
