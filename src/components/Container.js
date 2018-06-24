import React from 'react';
import { Link } from 'react-router-dom';

export default class Container extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        return (
          <div className="card mainCard">
            <Link to={this.props.myLink}>
              <img className="card-img-top" src={this.props.photo} alt="Card image cap" />
            </Link>
            <div className="card-body">
              <Link to={this.props.myLink}>
                <a href="#" className="btn btn-primary login">Learn more about studies</a>
              </Link>
            </div>
          </div>
        );
    }
}
