import React from 'react';
import "./TechCast.css";

function TechCast() {
  return (
    <>
      <div className="tc-category">
        <div className="tc-title">Tech<span class="title-cast">Cast</span></div>
      </div>
      <div className="tc-body">
        <div className="tc-description">
          <p>A series of live stream, where we have renowned tech personalities and enthusiasts join us to talk and engage with us about the latest trends in tech and share their experience in working with the tech space.</p><br></br>
          <p>This event focuses on embracing various domains and its involvement with Open Source.</p>
        </div>
        <div className="tc-episodes">
          <div className="tc-ep-title">Episodes</div>
          <div className="ep-section">
            <div className="tc-speaker">
              <div className="tc-ep-no">Ep. 1</div>
              <div className="tc-speaker-name">Dr. Thomas Wolf</div>
              <div className="tc-speaker-name">Chief Science Officer, Hugging Face</div>
              <div className="tc-speaker-name">Topic: NLP + Open Source</div>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/p0LtOmxq3sI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="ep-section">
            <div className="tc-speaker">
              <div className="tc-ep-no">Ep. 2</div>
              <div className="tc-speaker-name">Manaswini Das</div>
              <div className="tc-speaker-name">software engineer at RedHat</div>
              <div className="tc-speaker-name">Topic: APIs </div>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kvMUNlqp44s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="ep-section">
            <div className="tc-speaker">
              <div className="tc-ep-no">Ep. 3</div>
              <div className="tc-speaker-name">Giuseppe Bonocore</div>
              <div className="tc-speaker-name">Principal Solution Architect at RedHat</div>
              <div className="tc-speaker-name">Topic: DevOps And Microservices </div>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yfOXXWkuCEA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="tc-ep-title">Event Partner</div>
          <a href="https://www.airmeet.com" target="_blank"><div className="tc-partner"></div></a>
        </div>
      </div>
    </>
  );
}

export default TechCast;
