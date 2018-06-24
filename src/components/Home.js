import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export default class Home extends React.Component {
    render() {
        return (
            <body>
              <div className = "container" id="mainCards">

                <div className = "row">
                  <div className="col-lg-6 col-md-6">
                    <Container photo="images/study.jpg" myLink="/schools"/>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <Container photo="images/career.jpg" myLink="/employment"/>
                  </div>
                </div>

              </div>
            </body>
        );
    }
}
