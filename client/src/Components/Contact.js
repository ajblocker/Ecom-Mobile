import React from 'react';
import Forms from '../components/Forms';

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
        this.setState({ contacts: [] })
      })
      //logs any error
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
      
    }
    render() {
        const { contacts } = this.state;
        let filteredContacts = contacts;
      
        return (
            <div>
                <div className="contactHeader">
                <h2>Contact us</h2>
                <p>Need to get in touch? Fill in the form below for more information</p>
                </div>
                    <div className="forms">
                        <Forms />
                    </div>
            {/* desktop users are normally older and would like to see feedback before they buy clothes for their granchildren/etc.
            mobile users are traditionally younger and know what they want to buy and don’t normally leave/check feedback
                     */}
                    <div className="row contacts">
                        {filteredContacts.map(contacts => (
                            <div className="col-4">
                                    <p className="contact-name">{contacts.contact_name}:</p>
                                    <p className="contact-message">{contacts.contact_message}</p>
                            </div>
                        ))}
                    </div>
            </div>
        );
        }
    }

    export default Contact;