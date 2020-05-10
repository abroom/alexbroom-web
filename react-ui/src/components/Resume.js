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
        <p className="title"><b>Colorado School of Mines</b></p>
        <p className="nested">Golden, Colorado
          <br/>President's Scholarship
          <br/>Bachelor of Science in Computer Science
          <br/>Graduated May 9, 2014
          <br/><b>CSCI GPA: 3.0</b>
        </p>
      </div>
    );
  }
}

class AreasOfStudy extends React.Component {
  render() {
    const areasOfStudy = [
      'Algorithms',
      'Computer Graphics',
      'Computer Organization',
      'Computer Simulation',
      {display: 'Computer Vision for Faces', href: 'http://courses.learnopencv.com/p/computer-vision-for-faces'},
      'Data Structures',
      'Discrete Mathematics',
      'Elements of Computing Systems',
      {display: 'Machine Learning by Standford University', href: 'https://www.coursera.org/account/accomplishments/records/AEJAFWLU6TR5'},
      'Mobile Programming',
      'Operating Systems',
      'Programming Languages',
      'Software Engineering',
      'User Interfaces',
      'Web Applications',
      'Web Programming',
      'Core Courses for Mechanical Engineering',
    ]

    return (
      <div id="areas-of-study">
        <h1>Areas of Study</h1>
        {createGrid(areasOfStudy, 6)}
      </div>
    );
  }
}

class Software extends React.Component {
  render() {
    const software = [
      '.NET Core',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'AngularJS',
      'Apex',
      'Bash',
      'Bootstrap',
      'C',
      'C++',
      'C#',
      'CSS',
      'Gimp',
      'Git',
      'HTML',
      'Java',
      'JavaScript',
      'JQuery',
      'JSON',
      'LibreOffice',
      'Linux',
      'Mac OS X',
      'MATLAB',
      'Microsoft Windows',
      'Microsoft Office',
      'MySQL',
      'Node.js',
      'PHP',
      'PostgreSQL',
      'Python',
      'Rails',
      'React',
      'Ruby',
      'SalesForce',
      'SCSS',
      'Solidworks',
      'SOQL',
      'SQLite',
      'Sublime Text',
      'TypeScript',
      'Unity',
      'XML',
    ];

    return (
      <div id="software">
        <h1>Software</h1>
        {createGrid(software, 3)}
      </div>
    );
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <h1>Experience</h1>
        <p className="title"><b>Conga - Senior Engineer</b> - Broomfield, CO - February 2018</p>
        <p className="nested">Full stack developer as part of the Conga Sign team. Stack used a Java Spring Boot backend with a React frontend. Product was integrated within the Salesforce ecosystem, but core functionality hosted on AWS. Further work in dev ops to migrate from AWS Elastic Beanstalk to Kubernetes on AWS EC2. Part of 2 person team to write SMS microservice in C# .NET Core for all Conga Suite products to use, which leveraged AWS SNS. Responsible for story grooming, code quality, and test suite maintenance. Lead creation of onboarding documentation, process, and training of new team members as product quickly grew.</p>
        <p className="title"><b>Zayo Group - Jr. Application Developer</b> - Boulder, CO - September 2014</p>
        <p className="nested">Developed and maintained internal and external SalesForce scalable applications from start until completion.  Part of design and implementaiton of database access, event handling as records progressed through the system, and customer-facing front end web application implementation using JavaScript, JQuery, and AngularJS.</p>
        <p className="title"><b>Symplified - Field Session Intern</b> - Boulder, CO - Summer 2012</p>
        <p className="nested">Wrote base code for a REST applications in Java, .NET, Ruby and PHP.  Created basic GUIs in order for Symplified to demo the REST application to clients.  As a field session intern, progress was evaluated by Colorado School of Mines and received an A.</p>
        <p className="title"><b>Rice University - Programming Intern</b> - Houston, TX - Summer 2011</p>
        <p className="nested">Upgraded Java and C++ research software for analyzing computer performance profiles.  Implemented file reading and writing with Google Protocol Buffers instead of XML.  Reduced save files from over 1 GB to less than 100 MB.</p>
        <p className="title"><b>University of Texas MD Anderson Cancer Center - Pathology Intern</b> - Houston, TX - Summer 2009</p>
        <p className="nested">Used Adobe Photoshop and Gimp to measure br/east tumor volumes.  Conducted simulations for br/east tumor volume estimation.  Assisted pathology researchers with microscope slide organizations.</p>
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
        <h1>Fun &amp; Enrichment</h1>
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

function createGrid(items, colWidth) {
  return (
    <Grid fluid>
      {items.map(item => <Col md={colWidth}>{item.display ? <a target="_blank" href={item.href}>{item.display}</a> : item}</Col>)}
    </Grid>
  );
}
