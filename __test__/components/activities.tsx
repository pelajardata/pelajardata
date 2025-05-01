function activities(){
    const images = []
    for (let index = 1; index <= 4; index++) {
        images.push(<img src={`public/event-online${index}.png`} alt="activity"></img>)
        console.log(images)
    }
    return <article id="activities">
          <h1>Spark & Collaborate</h1>
          <h2>Community Meetups</h2>
            <div className="footage">
            {images}
            </div>
          <h2>Virtual Gatherings</h2>
            <div className="footage">
            {images}
            </div>
    </article>
    }
export default activities;