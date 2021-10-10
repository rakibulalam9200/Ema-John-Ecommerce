import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total>0?15:0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h4 style = {{fontWeight:400}}>Items Ordered: {totalQuantity}</h4> 
            <br />

            <div style={{marginLe: '0 auto'}}>
              <table style = {{marginLeft:'auto',marginRight:'auto'}}>
                  <tbody>
                  <tr>
                    <td style={{textAlign:'left'}}>items:</td>
                    <td style={{textAlign:'right'}}>${total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td style={{textAlign:'left'}}>Shipping Cost:</td>
                    <td style={{textAlign:'right'}}>${shipping.toFixed(2)}</td>
                </tr>
                <tr>
                    <td style={{textAlign:'left'}}>Tax/Vat:</td>
                    <td style={{textAlign:'right'}}>${tax.toFixed(2)}</td>
                </tr>
                <tr>
                    <td><hr/></td>
                    <td><hr/></td>
                </tr>
                <tr>
                    <th style={{textAlign:'left'}}>Grand Total:</th>
                    <th style={{textAlign:'right'}}>${grandTotal.toFixed(2)}</th>
                </tr>
                <tr>
                    <td><br/></td>
                </tr>
                <tr>
                    <td colSpan="2">{props.children}</td>
                </tr>
                  </tbody>
                
              </table>        
            </div>  
            
        </div>
    );
};

export default Cart;