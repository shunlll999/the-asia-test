import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EventDispatcher } from '../action';

import NavigationBar from '../components/NavigationBar';
import CoverImage from '../components/CoverImage';

class App extends Component {

  _onProductHandler() {
    this.props.getProducts('GET_PRODUCT');
  }

  render() {
    const { products } = this.props;
    return (
      <div className="">
        <NavigationBar/>
        <CoverImage photoList={products.productList.product_medias}/>
        {/* <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={()=> this._onProductHandler()}>Click me!</button> */}
        <button className="my-btn" type="button" onClick={()=> this._onProductHandler()}>Click me!</button>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProducts: EventDispatcher.getProduct
  }, dispatch);
};

const stateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(stateToProps, dispatchToProps)(App);
