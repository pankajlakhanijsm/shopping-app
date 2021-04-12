import React, { Component } from 'react';
import { Form } from 'reactstrap';

class Mform extends Component {
    initialStates = {
        productImage: "",
        productName: "",
        productDescription: "",
        productPrice: ""
    }
    state = this.initialStates;

    InputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    submitHandler = () => {
        this.props.formSubmitHandler(this.state);
        this.setState(this.initialStates)
    }

    render() {
        const { productName, productDescription, productImage, productPrice } = this.state;
        return (
            <Form style={{ boxSizing: 'border-box', padding: '30px', display: 'inline-block', background: '#ffffff', border: '2px solid black' }}>
                <h1>Enter Product details</h1>
                <p>Enter Product Name:</p>
                <input type="text" name="productName" id="ProductName" value={productName} onChange={this.InputHandler} />
                <p>Enter Product Details:</p>
                <input type="text" name="productDescription" id="ProductDetail" value={productDescription} onChange={this.InputHandler} />
                <p>Product Image URL:</p>
                <input type="text" name="productImage" id="productImage" value={productImage} onChange={this.InputHandler} />
                <p>Enter Product Price:</p>
                <input type="number" name="productPrice" id="ProductPrice" value={productPrice} onChange={this.InputHandler} />
                <br />
                <br />
                <input type="button" onClick={this.submitHandler} value="Submit" />
            </Form>

        );
    }
}
export default Mform;