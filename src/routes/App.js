import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EventDispatcher } from '../action';

import NavigationBar from '../components/NavigationBar';
import CoverImage from '../components/CoverImage';
import ContentDetail from '../components/ContentDetail';

class App extends Component {

  componentDidMount() {
    this.props.getProducts('GET_PRODUCT');
  }

  render() {
    const { products } = this.props;
    return (
      <div className="">
        <NavigationBar/>
        <CoverImage photoList={products.productList.product_medias}/>
        <ContentDetail products={products.productList}/>
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
