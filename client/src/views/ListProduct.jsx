import React from 'react'

const Product = props => {
    return (
        <div className="card">
            <div className="work-img" style={{height: 445}}>
                <a href="ShopMens"><img className="card-img-top img-fluid" src={props.product.image} alt="pacsun huf shirt"  height="150"/></a>
                <div className="img-overlay"></div>
            </div>
            <div className="card-body">
                <p>{props.product.name}</p>
                <p>{props.product.price}</p>
                <p>{props.product.description}</p>
            </div>
        </div>
    )
}



export default Product;