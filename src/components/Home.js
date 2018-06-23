import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <body>
            <div className = "container" id = "mainCards">
              <div className = "row">
                <div className="offset-lg-1 col-lg-5 col-md-5">
                  <div className="card mainCard">
                    <Link to='/schools'>
                      <img className="card-img-top" src="images/study.jpg" alt="Card image cap" />
                    </Link>
                    <div className="card-body">
                      <Link to='/schools'>
                        <a href="#" className="btn btn-primary login">Learn more</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  <div className="card mainCard">
                    <Link to='/employment'>
                      <img className="card-img-top" src="images/career.jpg" alt="Card image cap" />
                    </Link>
                    <div className="card-body">
                      <Link to='/employment'>
                        <a href="#" className="btn btn-primary login">Learn more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </body>
        );
    }
}