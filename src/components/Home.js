import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "../SingleProduct";
import "./styles.css";

// faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  const [products] = useState(productArray);
  
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct
          prod={prod}
          key={prod.id}
        />
      ))}
    </div>
  );
};

export default Home;
