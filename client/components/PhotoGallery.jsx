import React from 'react';
import ReactDOM from 'react-dom';
import { Photos } from '../components/Photos';

const PHOTOPATHS = [
  'img/gallery/photo1.jpg',
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

export class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentPhoto: 0 };
  }

  nextPhoto() {
    let current = this.state.currentPhoto;
    let next = ++current % PHOTOPATHS.length;
    this.setState({ currentPhoto: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPhoto.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = PHOTOPATHS[this.state.currentPhoto];
    return (
    <div>
      <h1>Here we are!</h1>
      <Photos src={src} />
    </div>
    )
  }
};

export default PhotoGallery
