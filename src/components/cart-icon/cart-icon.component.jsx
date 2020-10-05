import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import {connect} from "react-redux";
import {toggleCartsHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartsHidden}) => (
    <div className="cart-icon"
         onClick={toggleCartsHidden}
    >
        <ShoppingIcon className = "shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartsHidden: () => dispatch(toggleCartsHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);