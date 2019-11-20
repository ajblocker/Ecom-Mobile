import React from 'react'
import { Component } from 'react'
import Filter from '../Components/Filter'


class Product extends Component {
    state = {
      products: [],
      error: false
    }
  
    //invoked immediately as component mounted
    componentDidMount(){
    //fetch resources to make GET request to endpoint
    fetch('/api/products')
    //parses the output to JSON, returns promise
    .then(res => res.json())
    //sets the value of state to the output from the API call
    .then((data) => {
        this.setState({ products: data })
    })
    //logs any error
    .catch(err => {
        console.log(err)
        this.setState({ err })
    })
}

    render() {
    // const { contacts } = this.state;
    // let filteredContacts = contacts;

        return (
            <div className="row products" >
                <Filter/>
            {this.state.products.map(product => {
                return <div className="col-4" >
                    <div className="card">
                        <div className="work-img" style={{height: 445}}>
                            <a href="ShopMens"><img className="card-img-top img-fluid" src={product.img} alt="pacsun huf shirt" height="150"/></a>
                            <div className="img-overlay"></div>
                        </div>
                        <div className="card-body">
                            <p>{product.product_name}</p>
                            <p>{product.prod_description}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
        )
    }
}

export default Product;
