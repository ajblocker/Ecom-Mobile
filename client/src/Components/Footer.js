import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footerHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duratation="1.5s">
                            <hr/>
                        <h3>About Awe$ome$tne$t</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, arcu eu dignissim ultrices, dolor purus convallis odio, nec tincidunt ex sapien nec libero. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="https://www.facebook.com/"><i className="fa fa-facebook-square"></i></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter-square"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duratation="1.5s">
                            <hr/>
                        <h3 className="secondaryHeader">Say hello:</h3>
                         <ul className="list-unstyled">
                            <li><p><strong><i className="fa fa-map-marker"></i>Address:</strong> Location, Street,Code</p></li>
                            <li><p><strong><i className="fa fa-envelope"></i>Email:</strong><a href="##">info@randomemail.com</a></p></li>
                            <li><p><i className="fa fa-truck"></i>Track My Order<a href="##"></a></p></li>
                            <li><p><i className="fa fa-phone"></i><strong>Phone:</strong><a href="##">1-800-888-8888</a></p></li>
                
                        </ul>
                        </div>
                    </div>
          <div className="col-md-12">
            <p>&copy; 2019 Designed by AJ Blocker</p>
          </div>
            </div>
        </div>
        )
    }
}

export default Footer;