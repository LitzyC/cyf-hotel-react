import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>RESTAURANT ORDERS</h3>
      <ul>
        <Order orderType="Salads" startFrom={2} increment={5} />
        <Order orderType="Pizzas" startFrom={5} increment={10} />
        <Order orderType="Cakes" startFrom={10} increment={20} />
        <Order orderType="Soda" startFrom={15} increment={15} />
        <Order orderType="Beberages" />
      </ul>
    </div>
  );
};

export default Restaurant;
