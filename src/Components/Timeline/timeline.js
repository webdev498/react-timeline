import React       from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import MockFilmData from '../../MockData/mocks';
import ThumbIcon from '../ThumbIcon/thumbicon';
import Card from '../Card/card';

import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

const IconStyle = { 
  background: '#ccc', 
  height: '15px', 
  width: '15px', 
  top: '0px',
  right: '12px',  
}

class Timeline extends React.Component {

  render() {
    const {
      position,
    } = this.props;

    const moviesArray = MockFilmData.movies;

    return (
      <div className="timline-container">
        <VerticalTimeline className="movie-timeline-component">
          

          {
            moviesArray
              .sort((a, b) => (new Date(a.releaseDate) - new Date(b.releaseDate)))
              .map(movie => (
                <VerticalTimelineElement
                  key={movie.keyId}
                  position={position}
                  className={ movie.toggle === 1 ? "movie-timeline-element" : "movie-timeline-element movie-timeline-element-disabled"}
                  iconStyle={ movie.toggle === 1 ? { background: movie.iconColor } : {background: '#ccc'}}
                  icon={<ThumbIcon subGenre={movie.subGenre} />} 
                >
                  <Card movie={ movie } />
                </VerticalTimelineElement>
              ))
          }

          <VerticalTimelineElement className="movie-timeline-element" position={ position } iconStyle={ IconStyle } >
            12/24/18
          </VerticalTimelineElement>

          <VerticalTimelineElement className="movie-timeline-element" position={ position } iconStyle={ IconStyle } >
            TODAY
          </VerticalTimelineElement>

          
        </VerticalTimeline>
      </div>
    );
  }
}

export default Timeline;
