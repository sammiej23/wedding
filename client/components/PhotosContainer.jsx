import React from 'react';
import ReactDOM from 'react-dom';
import { Photos } from '../components/Photos';

const PHOTOPATHS = [
  '../img/gallery/photo1.jpg',
  'img/gallery/photo2.jpg',
  'img/gallery/photo3.jpg',
  'img/gallery/photo4.jpg',
  'img/gallery/photo5.jpg',
  'img/gallery/photo6.jpg',
  'img/gallery/photo7.jpg',
  'img/gallery/photo8.jpg',
  'img/gallery/photo9.jpg',
  'img/gallery/photo10.jpg',
  'img/gallery/photo11.jpg',
  'img/gallery/photo12.jpg',
  'img/gallery/photo13.jpg',
  'img/gallery/photo14.jpg',
  'img/gallery/photo15.jpg',
  'img/gallery/photo16.jpg',
  'img/gallery/photo17.jpg',
  'img/gallery/photo18.jpg',
  'img/gallery/photo19.jpg',
  'img/gallery/photo20.jpg',
  'img/gallery/photo21.jpg',
  'img/gallery/photo22.jpg'
];

export class PhotosContainer extends React.Component {
  constructor(props) {
    super(props);
    alert('here I am');
    this.state = { currentPhoto: 0 };
    console.log(">>> state: " + state);
    this.nextPhoto = this.nextPhoto.bind(this, this.state);
  }

  nextPhoto(state) {
    alert("state: " + state);
    console.log("currentPhoto: " + state.currentPhoto);
    let current = state.currentPhoto;
    let next = ++current % PHOTOPATHS.length;
    this.setState({ currentPhoto: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPhoto, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = PHOTOPATHS[this.state.currentPhoto];
    return <Photos src={src} />;
  }
});

ReactDOM.render(
  <PhotosContainer />,
  document.getElementById('photoApp')
);
