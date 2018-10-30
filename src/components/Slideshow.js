import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';


const Slideshow = props => {

  return (
    <div className="slideshow-container">
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
  
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={2}
    slidesToShow={2}
    scrollOnDevice={true}
  >
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-1.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-2.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-3.jpg')}
    />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-4.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-5.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-6.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-7.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-8.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
      src={require('../images/highschool-9.jpg')}
      />
    </div>
    <div>
      <img
        className="slideshow-img"
        alt=''
        src={require('../images/highschool-10.jpg')}
      />
    </div>
  </InfiniteCarousel>
    </div>
  );
}
export default Slideshow;
