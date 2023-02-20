import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { cards } from "./cards";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function CardList() {
  return (
    <div className="container">
      <h3 className="text-warning">the best is for you</h3>
      <h4>JEWELLERY CATEGORIES</h4>
      <div className="row">
          <div className="col-12 col-md-3 d-none d-md-block">
            <p>
              <img
                // src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                className="d-none d-md-block py-5"
                alt="jewellery-image"
              />
            </p>
          </div>
          <main className="col-12 col-md-9 card-list">
            {cards.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
          </main>
        </div>
    </div>
  );
}

export default CardList;
