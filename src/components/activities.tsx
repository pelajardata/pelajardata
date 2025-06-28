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

    const images : any[] = []
    for (let index = 1; index <= 4; index++) {
        images.push(
            <div className="online-card" key={`activity-${index}`}>
                <img src={`/event-online${index}.png`} alt="activity" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
            </div>
        )
    }

    const images2: any[] = []
    for (let index = 1; index <= 4; index++) {
        images2.push(
            <div className="activity-card" key={`meetup-${index}`}>
                <img src={`/meetup-${index}.jpg`} alt="Meetup Pelajar Data" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            </div>
        )
    }

    return <article id="activities">
        <div className="blob-background">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,400 C150,250 350,350 500,200 C650,50 850,150 1000,0 L1000,600 L0,600 Z" fill="var(--more-lighter-blue)" opacity="0.2"/>
                <path d="M0,0 C150,150 350,50 500,200 C650,350 850,250 1000,400 L1000,600 L0,600 Z" fill="var(--green-accent)" opacity="0.1"/>
            </svg>
        </div>
        <div className="content-card">
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
        </div>
    </article>
}
export default activities;