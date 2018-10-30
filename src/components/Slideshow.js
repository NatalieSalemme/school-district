
import React from 'react';
import { CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Slideshow extends React.Component {
  render() {
    return (
      <div className="carousel-container">
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={85}
        totalSlides={10}
      >
      <div className="carousel-buttons">
        <ButtonBack className="carousel-btn">Back</ButtonBack>
        <ButtonNext className="carousel-btn">Next</ButtonNext>
      </div>

      <Slider>
        <Slide index={0}>
          <img
            className="slideshow-img"
            alt='Students sitting around table with ipads and computers'
            src={require('../images/highschool-0.jpg')}
          />
          
        </Slide>

        <Slide index={1}>
          <img
            className="slideshow-img"
            alt='Students writing notes in a notebook'
            src={require('../images/highschool-1.jpg')}
          />
        </Slide>
        <Slide index={2}>
          <img
            className="slideshow-img"
            alt='Teacher helping students with their computers'
            src={require('../images/highschool-2.jpg')}
          />
        </Slide>
        <Slide index={3}>
          <img className="slideshow-img"
          alt='Students smiling in the classroom'
          src={require('../images/highschool-3.jpg')}
          />
          </Slide>
          <Slide index={4}>
            <img
              className="slideshow-img"
              alt='Students lined up in the hallway'
              src={require('../images/highschool-4.jpg')}
            />
          </Slide>

          <Slide index={5}>
            <img
              className="slideshow-img"
              alt='Students taking a test'
              src={require('../images/highschool-5.jpg')}
          />
          </Slide>

          <Slide index={6}>
          <img
                className="slideshow-img"
                alt='Students talking outdoors'
                src={require('../images/highschool-6.jpg')}
              />
          </Slide>
          <Slide index={7}>
          <img
                className="slideshow-img"
                alt='Students sitting down on a bench'
                src={require('../images/highschool-7.jpg')}
              />
          </Slide>
          <Slide index={8}>
          <img
                className="slideshow-img"
                alt='Students walking on grass'
                src={require('../images/highschool-8.jpg')}
              />
          </Slide>
          <Slide index={9}>
          <img
                className="slideshow-img"
                alt='Students reading in a circle'
                src={require('../images/highschool-9.jpg')}
              />
          </Slide>


      </Slider>


      </CarouselProvider>
      </div>
    );
  }
}
export default Slideshow;
