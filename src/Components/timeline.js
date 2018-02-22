import React from 'react';
import Item from './item';

class Timeline extends React.Component {
    render() {
      return (
          <div className="timeline">
            <Item 
                image="http://lorempixel.com/400/400/people/1/" 
                date="09/12/2016"
                movie="Phasellus pharetra"
                actor="Dalton Keck"
                genre="Zombies"
                producer="Tim Cook"
            />

            <Item 
                image="http://lorempixel.com/400/400/people/1/" 
                date="09/12/2016"
                movie="Phasellus pharetra"
                actor="Dalton Keck"
                genre="Zombies"
                producer="Tim Cook"
            />

            <Item 
                image="http://lorempixel.com/400/400/people/3/" 
                date="08.12.2016"
                movie="Proin consectetur"
                actor="Dalton Keck"
                genre="Zombies"
                producer="Tim Cook"
            />

            <Item 
                image="http://lorempixel.com/400/400/people/8/" 
                date="07.12.2016"
                movie="Duis porta urna"
                actor="Dalton Keck"
                genre="Zombies"
                producer="Tim Cook"
            />
        </div>
      );
    }
}


export default Timeline;