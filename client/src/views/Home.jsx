import React from 'react';
import Main from './Main';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = (props) => {
	return (
            <div>
                <Main />
                <Pricing />
				<Footer />
            </div>
	)
}

export default Home