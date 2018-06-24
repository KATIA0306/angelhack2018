import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export default class Home extends React.Component {
    render() {
        return (
            <body>
              <div className = "container" id="mainCards">
                <div className = "row">
                    <div className="col-lg-12 col-md-12">
                    <div className="jumbotron">
                      <h1 className="display-4">Welcome to YouCanInfo!</h1>
                      <p className="lead">This is a website for providing vital employment information to individuals who have, or are thinking about, immigrating to Canada.</p>
                    </div>
                  </div>
                </div>

                <div className = "row">
                  <div className="col-lg-6 col-md-6">
                    <Container photo="images/study.jpg" myLink="/schools" label="Learn more about studies"/>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <Container photo="images/career.jpg" myLink="/employment" label="Learn more about employment"/>
                  </div>
                </div>

              </div>
            </body>
        );
    }
}
