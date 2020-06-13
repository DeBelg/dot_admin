import React from "react";
import Item from "./Item";

const ApartmentCardList = ({ data }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap"
    }}
  >
    {data.map(item => (
      <Item key={`${item.address}`} data={item} />
    ))}
  </div>
);

export default ApartmentCardList;
