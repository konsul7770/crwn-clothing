import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import {connect} from "react-redux";
import {toggleCartsHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartsHidden,itemCount}) => (
    <div className="cart-icon"
         onClick={toggleCartsHidden}
    >
        <ShoppingIcon className = "shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})


const mapDispatchToProps = dispatch =>({
    toggleCartsHidden: () => dispatch(toggleCartsHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);