import React from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import pdf from '../assets/AlexanderBroomResume.pdf';
import docx from '../assets/AlexanderBroomResume.docx';

export default class Home extends React.Component {
  render() {
    return (
      <div id="resume">
        <div className="btn-toolbar-wrapper">
          <div>
            <ButtonToolbar>
              <Button target="_blank" href={pdf}>PDF</Button>
              <Button href={docx}>DOCX</Button>
              <Button target="_blank" href="https://docs.google.com/document/d/13-L9q3vZhcs133lLRauKpaM9NSE2dbkF5xDsrS7i1IU">Google Doc</Button>
            </ButtonToolbar>
          </div>
        </div>
        <div className="main">
          <Objective/>
          <Education/>
          <AreasOfStudy/>
          <Software/>
          <Experience/>
          <Publications/>
          <FunEnrichment/>
        </div>
      </div>
    )
  }
}

class Objective extends React.Component {
  render() {
    return (
      <div id="objective">
        <h1>Objective</h1>
        <h4>
          To be a part of a dedicated team that uses cutting edge technology to develop high quality applications and services.
        </h4>
      </div>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <div id="education">
        <h1>Education</h1>
        <p>
          <b>Colorado School of Mines</b>
          <p>Golden, Colorado
            <br/>President's Scholarship
            <br/>Bachelor of Science in Computer Science
            <br/>Graduated May 9, 2014
            <br/><b>CSCI GPA: 3.0</b>
          </p>
        </p>
      </div>
    );
  }
}

class AreasOfStudy extends React.Component {
  render() {
    return (
      <div id="areas-of-study">
        <h1>Areas of Study</h1>
        <Grid fluid>
          <Row>
            <Col md={4}>Algorithms</Col>
            <Col md={4}>Computer Graphics</Col>
            <Col md={4}>Computer Organization</Col>
            <Col md={4}>Computer Simulation</Col>
            <Col md={4}><a href="http://courses.learnopencv.com/p/computer-vision-for-faces">Computer Vision for Faces</a></Col>
            <Col md={4}>Data Structures</Col>
            <Col md={4}>Discrete Mathematics</Col>
            <Col md={4}>Elements of Computing Systems</Col>
            <Col md={4}><a href="https://www.coursera.org/account/accomplishments/records/AEJAFWLU6TR5">Machine Learning by Standford University</a></Col>
            <Col md={4}>Mobile Programming</Col>
            <Col md={4}>Operating Systems</Col>
            <Col md={4}>Programming Languages</Col>
            <Col md={4}>Software Engineering</Col>
            <Col md={4}>User Interfaces</Col>
            <Col md={4}>Web Applications</Col>
            <Col md={4}>Web Programming</Col>
            <Col md={4}>Core Courses for Mechanical Engineering</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class Software extends React.Component {
  render() {
    return (
      <div id="software">
        <h1>Software</h1>
        <Grid fluid>
          <Col md={2}>.NET</Col>
          <Col md={2}>Adobe Illustrator</Col>
          <Col md={2}>Adobe Photoshop</Col>
          <Col md={2}>AngularJS</Col>
          <Col md={2}>Apex</Col>
          <Col md={2}>Bash</Col>
          <Col md={2}>Bootstrap</Col>
          <Col md={2}>C</Col>
          <Col md={2}>C++</Col>
          <Col md={2}>C#</Col>
          <Col md={2}>CSS</Col>
          <Col md={2}>Gimp</Col>
          <Col md={2}>Git</Col>
          <Col md={2}>HTML</Col>
          <Col md={2}>Java</Col>
          <Col md={2}>JavaScript</Col>
          <Col md={2}>JQuery</Col>
          <Col md={2}>JSON</Col>
          <Col md={2}>LibreOffice</Col>
          <Col md={2}>Linux</Col>
          <Col md={2}>Mac OS X</Col>
          <Col md={2}>MATLAB</Col>
          <Col md={2}>Microsoft Windows</Col>
          <Col md={2}>Microsoft Office</Col>
          <Col md={2}>MySQL</Col>
          <Col md={2}>Node.js</Col>
          <Col md={2}>PHP</Col>
          <Col md={2}>PostgreSQL</Col>
          <Col md={2}>Python</Col>
          <Col md={2}>Rails</Col>
          <Col md={2}>React</Col>
          <Col md={2}>Ruby</Col>
          <Col md={2}>SalesForce</Col>
          <Col md={2}>Solidworks</Col>
          <Col md={2}>SOQL</Col>
          <Col md={2}>SQLite</Col>
          <Col md={2}>Sublime Text</Col>
          <Col md={2}>Unity</Col>
          <Col md={2}>XML</Col>
        </Grid>
      </div>
    );
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <h1>Experience</h1>
        <p>
          <b>Zayo Group - Jr. Application Developer</b> - Boulder, CO - September 2014
          <p>Developed and maintained internal and external SalesForce scalable applications from start until completion.  Part of design and implementaiton of database access, event handling as records progressed through the system, and customer-facing front end web application implementation using JavaScript, JQuery, and AngularJS.</p>
        </p>
        <p>
          <b>Symplified - Field Session Intern</b> - Boulder, CO - Summer 2012
          <p>Wrote base code for a REST applications in Java, .NET, Ruby and PHP.  Created basic GUIs in order for Symplified to demo the REST application to clients.  As a field session intern, progress was evaluated by Colorado School of Mines and received an A.</p>
        </p>
        <p>
          <b>Rice University - Programming Intern</b> - Houston, TX - Summer 2011
          <p>Upgraded Java and C++ research software for analyzing computer performance profiles.  Implemented file reading and writing with Google Protocol Buffers instead of XML.  Reduced save files from over 1 GB to less than 100 MB.</p>
        </p>
        <p>
          <b>University of Texas MD Anderson Cancer Center</b> - Houston, TX - Summer 2009
          <p>Used Adobe Photoshop and Gimp to measure br/east tumor volumes.  Conducted simulations for br/east tumor volume estimation.  Assisted pathology researchers with microscope slide organizations.</p>
        </p>
      </div>
    );
  }
}

class Publications extends React.Component {
  render() {
    return (
      <div id="publications">
        <h1>Publications</h1>
        <p>
          Edgerton ME, Chuang YL, Macklin P, Sanga S, Kim J, Tomaiuolo G, Yang W, <b>Broom AD</b>, Do KA, Cristini V.  Using mathematical models to understand the time dependence of the growth of ductal carcinoma in situ. Abstract, 31st Annual San Antonio Br/east Cancer Symposium (2009).
        </p>
      </div>
    );
  }
}

class FunEnrichment extends React.Component {
  render() {
    return (
      <div id="fun-enrichment">
        <h1>Fun & Enrichment</h1>
        <p>Designed Prototype satellite to measure high altitude albedo reflection from clouds for Lockheed Martin</p>
        <p>Designed a heat recovery system for wood-burning ovens to lower use of gas powered water heating system</p>
        <p>Volunteered at University of Texas MD Anderson Cancer Center during summers from 2006 until 2009</p>
        <p>Students of Service - Raised money for br/east cancer research and provided food for the hungry</p>
        <p>Houston Food Bank - Assisted Hurricane victims</p>
        <p>Supported diabetes research - produced and sold over 100 shirts</p>
        <p>1st Degree Black Belt in Kuk Sool Won (South Korean Martial Arts)</p>
        <p>Member of Kuk Sool SWAT program (Students With Aptitude for Training)</p>
        <p>Awarded for swimming competitions and actively practice tennis, badminton</p>
        <p>Writes short stories and draws cartoons in spare time</p>
        <p>Speak basic French and Vietnamese</p>
        <p>Studying Piano since 2006 (Classical, Jazz, New Age, Pop)</p>
        <p>Studied ceramics, drawing, computer design</p>
        <p>Born and raised in Australia until 1999 (7 years) and regularly travel to Australia</p>
        <p>Travelled to Japan with school to study Japanese culture and traditions</p>
        <p>Travelled to Canada, Mexico, France, New Zealand, Bahamas, Puerto Rico, U.S. Virgin islands, Grand Turk</p>
        <p>Tutored people ranging from children to university students</p>
      </div>
    );
  }
}
