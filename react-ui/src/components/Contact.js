import React from 'react';
import { Alert, Button, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import EmailValidator from 'email-validator';
import Axios from 'axios';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      validName: null,
      validEmail: null,
      validSubject: null,
      validMessage: null,
      showErrorRequiredFields: false,
      showErrorInvalidEmail: false,
      showErrorMessageSent: false,
      showSuccessMessageSent: false
    };
    window.sendMessageInProgress = false;
  }

  render() {
    return (
      <div id="contact" className="main">
        <Alert bsStyle="info">
          <strong>Email</strong> is the easiest way to reach me.  
          Use the form below or 
          send a message to <strong><a href="mailto:contact@alexbroom.com" target="_top">contact@alexbroom.com</a></strong>.
        </Alert>

        {this.state.showErrorRequiredFields &&
          <Alert bsStyle="danger" >
            <strong>Error:</strong> You are missing required fields.
          </Alert>
        }
        {this.state.showErrorInvalidEmail &&
          <Alert bsStyle="danger" >
            <strong>Error:</strong> You have entered an invalid email.
          </Alert>
        }
        {this.state.showErrorMessageSent &&
          <Alert bsStyle="danger" >
            <strong>Error:</strong> Something went wrong sending your message. Try again or send me an email.
          </Alert>
        }
        {this.state.showSuccessMessageSent &&
          <Alert bsStyle="success" >
            <strong>Success!</strong> Your message has been sent.
          </Alert>
        }

        <Form horizontal>
          <FormGroup controlId="name" validationState={this.state.validName}>
            <Col componentClass={ControlLabel} lg={1}>Name</Col>
            <Col lg={11}>
              <FormControl
                type="text"
                placeholder="Name"
                disabled={this.state.disabled}
                onBlur={this.handleChangeName}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup controlId="email" validationState={this.state.validEmail}>
            <Col componentClass={ControlLabel} lg={1}>Email</Col>
            <Col lg={11}>
              <FormControl
                type="email"
                placeholder="Email"
                disabled={this.state.disabled}
                onBlur={this.handleChangeEmail}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup controlId="subject" validationState={this.state.validSubject}>
            <Col componentClass={ControlLabel} lg={1}>Subject</Col>
            <Col lg={11}>
              <FormControl
                type="text"
                placeholder="Subject"
                disabled={this.state.disabled}
                onBlur={this.handleChangeSubject}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup controlId="message" validationState={this.state.validMessage}>
            <Col lg={12}>
              <FormControl
                componentClass="textarea"
                rows="8"
                placeholder="Write your message here!"
                disabled={this.state.disabled}
                onBlur={this.handleChangeMessage}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col lg={12}>
              <Button bsStyle="primary" block disabled={this.state.disabled} onClick={this.sendMessage}>
                Send
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }

  // Input onBlur Handlers
  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handleChangeSubject = (event) => {
    this.setState({subject: event.target.value});
  }
  handleChangeMessage = (event) => {
    this.setState({message: event.target.value});
  }

  sendMessage = () => {
    if (window.sendMessageInProgress) return;
    window.sendMessageInProgress = true;

    var name = this.state.name;
    var email = this.state.email;
    var subject = this.state.subject;
    var message = this.state.message;

    // Reset Errors
    var hasError = false;
    this.resetAlerts();

    // Field Validation
    if (name === '') {
      this.setState({
        validName: 'error',
        showErrorRequiredFields: true
      });
      hasError = true;
    }
    if (email === '') {
      this.setState({
        validEmail: 'error',
        showErrorRequiredFields: true
      });
      hasError = true;
    } else if (!EmailValidator.validate(email)) {
      this.setState({
        validEmail: 'error',
        showErrorInvalidEmail: true
      });
      hasError = true;
    }
    if (subject === '') {
      this.setState({
        validSubject: 'error',
        showErrorRequiredFields: true
      });
      hasError = true;
    }
    if (message === '') {
      this.setState({
        validMessage: 'error',
        showErrorRequiredFields: true
      });
      hasError = true;
    }

    // If no error, create data and send POST request
    if (!hasError) {
      var data = {
        name: name,
        email: email,
        subject: subject,
        message: message
      };
      var thisApp = this;
      Axios.post('/contact', data)
      .then(function(response){
        thisApp.setState({
          disabled: true,
          showSuccessMessageSent: true
        });
      })
      .catch(function(error){
        window.sendMessageInProgress = false;
        thisApp.setState({showErrorMessageSent: true});
      });
    } else {
      window.sendMessageInProgress = false;
    }
  }

  resetAlerts() {
    this.setState({
      validName: null,
      validEmail: null,
      validSubject: null,
      validMessage: null,
      showErrorRequiredFields: false,
      showErrorInvalidEmail: false,
      showErrorMessageSent: false,
      showSuccessMessageSent: false
    });
  }
}