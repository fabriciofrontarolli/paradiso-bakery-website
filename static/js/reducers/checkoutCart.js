function checkoutCart(state = [], action) {
  const {
        type,
        item,
        cartLength,
        price,
        quantity
    } = action;
    
  switch (type) {
  case 'ADD_TO_CART':
    return [
      ...state,
      {
        cartLength,
        price,
        quantity,
        cartItems: item
      }
    ];
  case 'REMOVE_FROM_CART':
    const {index} = action;
    return [
      ...state.slice(0 , index),
      ...state.slice(index + 1)
    ];
  case 'EMPTY_CART':
    return [];
  default:
    return state;
  }
}

export default checkoutCart;
