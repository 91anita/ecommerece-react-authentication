import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-contex";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemAmount =cartItems[id]
  return (
  <div className="product">
    <img src={productImage} alt=""/>
    <div className="description">
        <p>
            <b>{productName}</b>
        </p><br/>
        <p>Rs{price}</p><br/>
    </div>
    <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart{cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
  </div>
  )
};
