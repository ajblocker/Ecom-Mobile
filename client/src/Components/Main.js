import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

class Main extends React.Component {
    render() {
      return (
          <div>
        <Carousel>
            <Carousel.Item>
                <img
                className='d-block w-100'
                src='https://magazineantidote.com/wp-content/uploads/2019/01/home-luka-sabbat-influencer-magazine-antidote.jpg'
                alt="First slide"
                width='100'
                height='700'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='d-block w-100'
                src="https://pbs.twimg.com/media/CNXndF_W8AEsmEN.jpg"
                alt="Third slide"
                width='100'
                height='700'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='d-block w-100'
                src="http://files.livefastmag.com.s3.amazonaws.com/wp-content/uploads/2016/07/241272_160428_EchoPark_Shot019-03161_p1483.jpg"
                alt="Third slide"
                width='100'
                height='700'
                />
            </Carousel.Item>
        </Carousel>
        </div>
        
      )
    }
  }

  export default Main;
