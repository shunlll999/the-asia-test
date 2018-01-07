import React from 'react';

const Overview = ({products, description, highlights}) => (
  <div className="overview-card">
    <div>
      {description}
      <ul className="overview-card__list">
        <li className="overview-card__list--item"><b>Departure:</b> {products.departure}</li>
        <li className="overview-card__list--item"><b>Duration:</b> {products.tour_duration}</li>
        <li className="overview-card__list--item"><b>Available day:</b> {products.available_day}</li>
        <li className="overview-card__list--item"><b>Meeting time:</b> {products.meeting_time}</li>
        <li className="overview-card__list--item"><b>Meetint point:</b> {products.meeting_point}</li>
      </ul>
    </div>
    <h3>
      Highlights
    </h3>
    <ul className="overview-card__highlight">
      {listHighlights(highlights)}
    </ul>
    <h3>
      { products.description_header && (JSON.parse(products.description_header)) }
    </h3>
    <ul className="overview-card__list">
      {listParagraph(products.description)}
    </ul>
  </div>
);

const listHighlights = (highlights) => {
  if( highlights ) {
    let list = JSON.parse(highlights);
    return list.map( (data, i) => <li className="overview-card__highlight--item" key={i}>{data}</li> );
  }
 return <div>Fetching..</div>
}

const listParagraph = (paragraph) => {
  if( paragraph ) {
    let list = JSON.parse(paragraph);
    return list.map( (data, i) => <li key={i} className="overview-card__list--item">{data}</li> );
  }
 return <div>Fetching..</div>
}

export default Overview;