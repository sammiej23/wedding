//import { BrowserRouter as Router } from 'react-router-dom'

// Create a component named SectionComponent
var SectionComponent = React.createClass({
render: function() {
  return (
    <div id="pageHome">
      <HomePage />
      <Menu items={ ['Home', 'OurStory', 'Details', 'RSVP', 'PhotoGallery'] } />
    </div>
  );
}
});

/*var Wrapper = React.createClass({
  getInitialState: function () {
    return {
      currentPage: null
    };
  },
  _setCurrentPage: function () {}
  render: function () {
    return <div>this.props.children</div>;
  }
});

var RoutingTable = <Route name="home"><HomePage /></Route>*/
var HomePage = React.createClass({
  render: function() {
    return (
    <div>
      <div id="HomeDiv">
        <h1>SAM & DAN</h1>
        <h4>are getting married</h4>
      </div>
      <div id="OurStoryDiv">Our Story</div>
      <div id="DetailsDiv">Details</div>
      <div id="RSVPDiv">RSVP</div>
      <div id="PhotoGalleryDiv">Photo Gallery</div>
    </div>
    );
  }
});

var Menu = React.createClass({
getInitialState: function(){
      return { focused: 0 };
  },

  clicked: function(index){

        // The click handler will update the state with
        // the index of the focused menu entry

        this.setState({focused: index});
        //this.setState({divName: index + "Div"});
    },

  render: function() {
    var self = this;

    return (
    <div>
      <ul>
      { this.props.items.map(function(m, index){

                    var style = '';

                    if(self.state.focused == index){
                        style = 'focused';
                    }

                    //var divName =

                    //document.getElementById(index+"Div").style.backgroundColor = "red";

                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:

                    return <li key={ index } className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;

                }) }

      </ul>
      <p>Selected: {this.props.items[this.state.focused]}</p>
      <p> Div Name: {this.props.items[this.state.focused]+"Div"}</p>
      </div>
    );
  }
});

// Render an instance of SectionComponent into document.body.root
ReactDOM.render(
<SectionComponent />,
document.getElementById('root')
);
