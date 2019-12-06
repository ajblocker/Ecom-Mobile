import React from 'react';
import Forms from '../views/Forms';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends React.Component {
    state = {
        contacts: [],
        error: false
    }

        //invoked immediately as component mounted
    componentDidMount() {
        //fetch resources to make GET request to endpoint
      fetch('/api/contacts')
      //parses the output to JSON, returns promise
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ contacts: data })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
      
    }
    render() {
      
        return (
            <div>
                <div className="contactHeader">
                <h2>Contact us</h2>
                <p>Need to get in touch? Fill in the form below for more information</p>
                </div>
                    <div className="forms">
                        <Forms />
                    </div>
            </div>
        );
        }
    }

    export default Contact;