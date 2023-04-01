import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {
    id,
    name,
    type,
    price,
    discount,
    description,
    image,
    productline,
    category,
    color,
    size,
    rating,
  } = props;

  return (
    <>
      <Link to="/product/mens-footware">
        <Card style={{ width: "inherit" }}>
          <Card.Img variant="top" src={props.imgSrc} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>RS.{price}</Card.Text>
            <Card.Text>{type}</Card.Text>
            <Card>{productline}</Card>
            <div className="product-actions"></div>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
