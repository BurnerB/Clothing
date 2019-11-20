import React from 'react';

import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item.component/cart-item.component';


const Cart = ({ cartItems }) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={CartItem.id} item={cartItem}/>
        )
            }
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStateToProps = ({ cart:{ cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(Cart);