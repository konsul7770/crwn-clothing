import React from "react";
import "./checkout-item.styles.scss";

import {connect} from "react-redux";
import {addItem,clearItemFromCart,removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem,addItem,clearItem,removeItem}) => {
    const {name,quantity,price,imageUrl} = cartItem;
    return (
     <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span
            className="remove-button"
            onClick={() => clearItem(cartItem)}
        >&#10005;</span>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);