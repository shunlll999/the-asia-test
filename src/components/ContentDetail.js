import React, { Component } from 'react';
import DetailComp from './DetailComp';
import OverviewComp from './OverviewComp';
import MoreInfomation from './MoreInfomation';

class ContentDetail extends Component {
  currentTarget = null;
  constructor() {
    super();

    this.state = {
      navActive: true,
      stateContent: ''
    }
  }

  _selectNavHandler (event) {
    if( this.currentTarget ) {
      this.currentTarget.className = 'button-style__item';
    }else {
      this.setState({navActive: false})
    }
    
    switch(event.target.id) {
      case 'overview': this.setState({stateContent: <OverviewComp products={this.props.products} description={this.props.products.seo_description} highlights={this.props.products.highlights}/>});
      break;
      case 'more-information': this.setState({stateContent: <MoreInfomation infomation={this.props.products.important_information}/>});
      break;
      default: this.setState({stateContent: <OverviewComp products={this.props.products} description={this.props.products.seo_description} highlights={this.props.products.highlights}/>});
    }

    event.target.className = 'button-style__item active';
    this.currentTarget = event.target;
  }

  _renderContent () {
    let content = null;
    if(this.state.stateContent){
      content = this.state.stateContent;
    }else {
      content = <OverviewComp products={this.props.products} description={this.props.products.seo_description} highlights={this.props.products.highlights}/>;
    }

    return content;
  }

  render() {
    return (
      <div className="content-detail">
        <div className="content-detail country">{this.props.products.departure}</div>
        <h2>{this.props.products.seo_title}</h2>
        <ul className="button-style">
          <li id="overview" className={`button-style__item ${(this.state.navActive)?'active':''}`} onClick={this._selectNavHandler.bind(this)}>Overview</li>
          <li id="more-information" className="button-style__item" onClick={this._selectNavHandler.bind(this)}>More Information</li>
        </ul>
        <DetailComp>
          {this._renderContent()}
        </DetailComp>
        <a className="content-detail__book">
          <div className="content-detail__book--title">Book now</div>
          <div className="content-detail__book--prices">USD<span>19.43</span></div>
          <div>Starting at</div>
        </a>
      </div>
    )
  }
}

export default ContentDetail;