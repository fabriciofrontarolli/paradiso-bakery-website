import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import store from '../store/store';

import BakeryCheckout from './BakeryCheckout';
import UserProfile from './UserProfile';

class BakeryCheckoutArea extends Component {

 constructor(props) {
    super(props);
    this.state = {
        cartItems: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cartItems: nextProps.cartItems
    });
  }

  render() {
    const cart = store.getState() && store.getState()["checkoutCart"];

    let cartContainer;
    if (cart && cart.length > 0) {
      cartContainer = (
        cart.map(item => <div className="bakery__checkout-container-cart-item">{item["cartItems"]}</div>)
      );
    } else {
      cartContainer = (
        <h4 className="bakery__checkout-container-empty-cart">You have no items in your shopping cart!</h4>
      );
    }

    return (
      <div className="bakery__container">
        <header className="bakery__header-container">
        <div className="bakery__header-container-label">
          <p>Jean Pauls Paradiso</p>
          <div className="bakery__header-container-action">
            <BakeryCheckout to="/checkout" cartLength={cart && cart.length} />
            <UserProfile />
          </div>
        </div>
        <div className="bakery__header-container-tabs">
          <nav className="bakery__header-container-tabs-nav">
            <ul className="bakery__header-container-tabs-list">
              <IndexLink className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/">Home</IndexLink>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/menu">Menu</Link>
              <Link className='bakery__tabs'
                activeClassName="bakery__navigation--bottom-border"
                to="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
        </header>
        <div className="bakery__checkout-container">
          {cartContainer}
        </div>
      </div>
    );
  }

}

export default BakeryCheckoutArea;
