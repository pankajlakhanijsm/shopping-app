import React from "react";
import Layout from "./layout.js";
import Mform from './form.js'
//import "./stylesheet.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Productform extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    productListItems: [],
  }

  formSubmitHandler = (character) => {
    this.setState({ productListItems: [...this.state.productListItems, character] });
  }

  notify = () => toast("Wow so easy!");

  /*productAddEvent = (event) => {
    event.preventDefault();
    const { productListItems } = this.state;
    productListItems.push({
      productImage: event.target.form.elements["productImage"].value,
      productName: event.target.form.elements["productName"].value,
      productDescription: event.target.form.elements["productDescription"].value,
      productPrice: event.target.form.elements["productPrice"].value
    });
    this.setState({ productListItems })
    console.log(productListItems);
  }*/
  render() {

    const { productListItems } = this.state;
    return (
      <div className="container" id="ProductList" style={{ position: 'relative', width: '100%', boxSizing: 'border-box', textAlign: 'center', background: '#e6994c', padding: '5%' }}>
        <button onClick={this.notify}>Notify!</button>
        <ToastContainer />
        <Mform formSubmitHandler={this.formSubmitHandler} />
        <Layout productListItems={productListItems} />
      </div>
    );
  }
}
export default Productform;
