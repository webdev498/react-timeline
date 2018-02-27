import React     from 'react';
import PropTypes from 'prop-types';

import SVGIcons from './svgIcons.json';

class ThumbIcon extends React.Component {
  static propTypes = {
    subGenre: PropTypes.string.isRequired,
  };

  render() {
    const { subGenre } = this.props;

    return (
      <svg 
          fill="currentColor" 
          preserveAspectRatio="xMidYMid meet" 
          height="1em" 
          width="1em" 
          viewBox="0 0 40 40" 
          
      >
      
        <g>
          <path d={SVGIcons[subGenre]} />
        </g>
      </svg>
    );
  }
}

export default ThumbIcon;
