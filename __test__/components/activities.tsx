import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function activities() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    const images = []
    for (let index = 1; index <= 4; index++) {
        images.push(
            <div className="online-card" key={`activity-${index}`}>
                <img src={`/event-online${index}.png`} alt="activity" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
            </div>
        )
    }

    const images2 = []
    for (let index = 1; index <= 4; index++) {
        images2.push(
            <div className="activity-card" key={`meetup-${index}`}>
                <img src={`/meetup-${index}.jpg`} alt="Meetup Pelajar Data" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            </div>
        )
    }

    return <article id="activities">
        <div>
            <h1>Spark & Collaborate</h1>
        </div>
        
        <h2>Community Meetups</h2>
        <div className="slideshow">
            <Slider {...sliderSettings}>
                {images2}
            </Slider>
        </div>
        <h2>Virtual Gatherings</h2>
        <div className="slideshow" id='virtual-gathering'>
            <Slider {...sliderSettings}>
                {images}
            </Slider>
        </div>
    </article>
}
export default activities;