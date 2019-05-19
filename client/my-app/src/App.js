import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const axios = require('axios');

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Form onSubmit={this.onClick}>
          <Form.Group controlId="originalUrl">
            <Form.Label>Original URL</Form.Label>
            <Form.Control ref="originalUrl" type="string" placeholder="Original URL" />
            
          </Form.Group>
  
          <Form.Group controlId="shortBaseUrl">
            <Form.Label>Password</Form.Label>
            <Form.Control ref='shortBaseUrl' type="string" placeholder="Short Base URL" />
            <Form.Text className="text-muted">
              This is the base url that will be used to build the short url.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }

  onClick = async (event) => {
    /// console.log("Button Clicked");

    /// prevent default prevents the page from reloading automatically 
    event.preventDefault(); 

    const form = event.target;
    console.log(form.elements)
    console.log(form.elements.originalUrl.value)
    console.log(form.elements.shortBaseUrl.value)

    const res = await axios.post(`/api/url`, {
      originalUrl: form.elements.originalUrl.value,
      shortBaseUrl: form.elements.shortBaseUrl.value,
    })

  };
}

export default App;
