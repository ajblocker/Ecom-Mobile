import React from 'react';

class Forms extends React.Component {
    render() {
        return (
            <div className="row">
              <div className="col-md-8 mx-auto">
                        <form>
                        <fieldset className="form-group">
                            <input type="text" className="form-control form-control-sm" id="firstName" placeholder="First Name..." required/>
                        </fieldset>
                        <fieldset className="form-group">
                            <input type="text" className="form-control form-control-sm" id="lastName" placeholder="Last Name..." required/>
                        </fieldset>
                        <fieldset className="form-group"><input type="email" className="form-control form-control-sm" id="email" placeholder="Email..." required/></fieldset>
                        <fieldset className="form-group"><input type="password" className="form-control form-control-sm" id="password" placeholder="Password..." required/></fieldset>
                        <fieldset className="form-group"><input type="text" className="form-control form-control-sm" id="subject" placeholder="Subject..." required/></fieldset>
                        <fieldset className="form-group">
                            <textarea className="form-control form-control-sm" id="message" placeholder="Message..." rows="3" required/>
                        </fieldset>
                        <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Forms;