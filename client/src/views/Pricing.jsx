import React from 'react';

class Pricing extends React.Component {
    render() {
      return (
        <div>
           <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h2 className="pricingHeader">Subscribe</h2>
                        <hr/>
                        <p className="lead">Sign up for weekly updates on upcoming deals and free, unlimited shipping!!</p>
                        <p className="lead">Buy a plan </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 wow fadeIn" data-wow-delay="0.4s">
                        <div className="card-price">
                            <div className="card-header">Basic</div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>5-7</strong> day shipping</li>
                                    <li className="list-group-item"><strong>$5</strong> off first purchase</li>
                                    <li className="list-group-item"><strong>$5.99</strong>a month</li>
                                </ul>
                            <div className="card-body">
                                <button type="button" className="btn btn-outline-info btn-block">Sign up</button>
                            </div>
                        </div>
                    </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.4s">
                  <div className="card-price">
                    <div className="card-header standard">Standard</div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>1-2</strong> day shipping</li>
                        <li className="list-group-item"><strong>$7</strong>off first purchase</li>
                        <li className="list-group-item"><strong>$10.99</strong>a month</li>
                        </ul>
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-info btn-block">Sign up</button>
                        </div>
                  </div>
                </div>
                 <div className="col-md-4 wow fadeIn" data-wow-delay="0.4s">
                    <div className="card-price">
                        <div className="card-header">Pro</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>SAME DAY SHIPPING</strong></li>
                                <li className="list-group-item"><strong>$10</strong> off first purchase</li>
                                <li className="list-group-item"><strong>$19.99</strong>for one year</li>
                            </ul>
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-info btn-block">Sign up</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      )
    }
  }

  export default Pricing;