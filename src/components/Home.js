import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <body>
            <div className = "container" id = "mainCards">
            <div className = "row">
              <div className="offset-lg-1 col-lg-5 col-md-5">

            <div className="card mainCard">
              <img className="card-img-top" src="images/study.jpg" alt="Card image cap" />
              <div className="card-body">

                <a href="#" className="btn btn-primary login">Learn more</a>
              </div>
            </div>
            </div>
            <div className="col-lg-5 col-md-5">
            <div className="card mainCard">
              <img className="card-img-top" src="images/career.jpg" alt="Card image cap" />
              <div className="card-body">

                <a href="#" className="btn btn-primary login">Learn more</a>
              </div>
            </div>
            </div>
            </div>
            </div>

            </body>
        );
    }
}
