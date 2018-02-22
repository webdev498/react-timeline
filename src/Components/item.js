import React from 'react';

class Item extends React.Component {
    render() {
      return (
            <div className="item">
                <div className="details">
                    <div>
                        <author>{this.props.movie}</author>
                        <ul>
                            <li>{this.props.date}</li>
                            <li>{this.props.actor}</li>
                            <li>{this.props.genre}</li>
                            <li>{this.props.producer}</li>
                        </ul>
                    </div>
                </div>

                <div className="image">
                    <div>
                    <img src={this.props.image} alt=""/>

                    { /*
                    <span>
                    {this.props.date}
                    </span>
                    */
                    }
                    </div>
                </div>
                
            </div>
        );
    }
}


export default Item;