export const addItemToCart = (cartitems, cartItemToAdd) => {
    const existingItem = cartitems.find(cartItem =>
        cartItem.id === cartItemToAdd.id
    );

    if (existingItem){
        return cartitems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
    return [...cartitems,{...cartItemToAdd, quantity:1}]
}