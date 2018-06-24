import React from 'react';

export default class Employment extends React.Component {
    render() {
        return (
            <body>
                <div className="container" id="employment">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="pageTitle">Employment</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <select id="eventType" className="form-control" required>
                                <option>- Select Profession -</option>
                                <option>Health and Medicine</option>
                                <option>Accounting</option>
                                <option>Technology and Engineering</option>
                                <option>Education and Teaching</option>
                                <option>School and Teaching</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a data-toggle="collapse" href="#collapsableEmployment" aria-expanded="false" aria-controls="collapsableEmployment"><h3 class="sectionTitle">Apply for Jobs</h3></a>
                            <div className="collapse" id="collapsableEmployment">
                                <div className="card card-body">
                                    <ul>
                                        <li><a href="https://www.jobbank.gc.ca/explorecareers">Government of Canada Job Bank</a></li>
                                        <li><a href="https://indeed.ca">Indeed</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a data-toggle="collapse" href="#collapsableJobMarket" aria-expanded="false" aria-controls="collapsableJobMarket"><h3 class="sectionTitle">Job Market</h3></a>
                            <div className="collapse" id="collapsableJobMarket">
                                <div className="card card-body">
                                    <img src="images/stats.jpg" className="statsExample" />
                                    Charts <a href="https://www.jobbank.gc.ca/studentdashboard/FOS20901/LOS06">statistics</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a data-toggle="collapse" href="#collapsableEmploymentServices" aria-expanded="false" aria-controls="collapsableEmploymentServices"><h3 class="sectionTitle">Employment Services</h3></a>
                            <div className="collapse" id="collapsableEmploymentServices">
                                <div className="card card-body">
                                    <ul>
                                        <li>JVS (<a href="https://www.jvstoronto.org">jvstoronto.ca</a>)</li>
                                        <li>Yonge Street Mission (<a href="https://www.ysm.ca/home">ysm.ca</a>)</li>
                                        <li>YMCA (<a href="https://ymcagta.org/">ymca.org</a>)</li>
                                        <li>Career edge (<a href="https://www.careeredge.ca">careeredge.ca</a>)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}