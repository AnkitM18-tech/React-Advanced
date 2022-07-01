import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders
// useCallback -> functions, useMemo -> values, React.memo -> props.

// Some function which takes a long time to calculate.Every time we click on count, hello is logged. So if it takes a long time to calculate then it will be a pain to always call this function, when We update the state value. So for that we use useMemo so that we can remember that when we update the state value then only to run.
const calculateMostExpensive = (data) => {
  console.log("hello");
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price > total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]); // dependency array also needs to be added. We will create the function only if we update the cart value.If we enter blank dependency list then the value won't increase even if we click the add to cart.(log will be 0 and cart number will updated once i.e 1)
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  ); // when we change products value then only it will run.(the function)

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive} </h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};
// as the useState is changing values of count, everytime it re-renders BigList and SingleProduct are also triggered and re-rendered. for that we have React.memo function. memo is checking and memoizing the values, if the props value is not changed it won't be re-rendered.

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big List Called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("Single Product Called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </article>
  );
};
// When we press add to cart button/click me button, components re-renders. coz react thinks each add to cart/click me press change its value.(recreated from scratch). to solve this we have useCallback and wrap the function around it.it will check whether the value for the function changed then only it will be recreated one more time.
export default Index;
