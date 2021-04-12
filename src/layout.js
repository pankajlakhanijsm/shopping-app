import React from 'react';
import { Button } from 'reactstrap';

const Layout = ({ productListItems }) => {
    if (productListItems.length) {
        const rows = productListItems.map((row, index) => {
            return (
                <div id="productlistview" style={{ position: 'relative', width: '50%', boxSizing: 'border-box', margin: 'auto', border: '2px solid black', marginBottom: '5px', background: '#ffffff' }} key={index} >
                    <div style={{ position: 'relative', width: '30%', float: 'left' }} id="product_image">
                        <img src={row.productImage} alt="" style={{ margin: '15px auto' }} />
                    </div>
                    <div style={{ position: 'relative', float: 'right', width: '70%' }} id="main_container">
                        <div id="Product_heading">
                            <h2 style={{ letterSpacing: 'normal', color: '#212121', margin: '10px', textOverflow: 'ellipsis', fontFamily: 'Roboto,sans-serif' }}>{row.productName}</h2>
                        </div>
                        <div id="product_details">
                            <p style={{ margin: '10px' }}>{row.productDescription}</p>
                            <span style={{ fontSize: '16px', fontWeight: '700', letterSpacing: 'normal', lineHeight: '1.19', textAlign: 'left', color: '#212121', margin: '10px' }}>₹{row.productPrice}</span>
                        </div>
                        <div id="submit_button">
                            <Button style={{ width: '100px', padding: '5px 10px', backgroundColor: '#004b5d', color: '#ffffff', fontSize: '15px', fontWeight: '900', margin: '10px' }} id="buy_now">buy now</Button>
                        </div>
                    </div>
                </div>
            );
        });
        return <div id="ItemContainer" style={{ boxSizing: 'border-box', margin: '50px' }}> {rows} </div>
    } else {
        return (
            <div id="ItemContainer" style={{ boxSizing: 'border-box', margin: '50px' }}>
                <h2>Enter data</h2>
            </div>
        );
    }
}
export default Layout;