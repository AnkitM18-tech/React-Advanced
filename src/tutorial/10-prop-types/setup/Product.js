import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

// If we have 100 entries and among those 1 have any missing values that we want to access, then it will throw an error. To debug log the static values.
const Product = ({ image, name, price }) => {
  // console.log(image, name, price);
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}; // propTypes is a property

// Setting default props - Or we can achieve the same using SC operator.
/* Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: defaultImage,
}; */

export default Product;
