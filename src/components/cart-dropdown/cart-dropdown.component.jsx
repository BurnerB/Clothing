import React from 'react';

import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item.component/cart-item.component';

import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Cart = ({ cartItems, history, dispatch }) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   
                cartItems.length ? (
                cartItems.map(cartItem => (
                <CartItem key={CartItem.id} item={cartItem}/>
            )))
            :(
            <span className='empty-message'>Your Cart  is empty</span>
            )
            }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT 
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));