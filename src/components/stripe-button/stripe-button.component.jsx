import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
}


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price* 100;
    const  publishableKey = 'pk_test_fwBFj2Uzu0j7VgoC3LFXhdAT00nQ0YFmEr';

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRwn Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}>
        </StripeCheckout>
    );
};



export default StripeCheckoutButton;