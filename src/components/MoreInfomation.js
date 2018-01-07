import React from 'react';

const MoreInfomation = ({infomation}) => (
  <div>
    {getInfomation(infomation)}
  </div>
);

const getInfomation =(infomation) => {
  const infoData = JSON.parse(infomation);
  
  if( infoData ){
    return infoData.map( (data, i) => (
        <div key={i}>
          <h3>{data.head}</h3>
          <ul className="overview-card__list">
            {getParagraph(data.body)}
          </ul>
        </div>
      )
    )
  }
  return <div>Fetching...</div>
}

const getParagraph = (paragraph) => {
  if(paragraph) {
    const list = JSON.parse(paragraph);
    return list.map(data => (
      <li className="overview-card__list--item">{data}</li>
    ))
  }
  return <div>Fetcing...</div>
} 

export default MoreInfomation;