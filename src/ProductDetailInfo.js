import React from "react";
import Button from "./Button.js";

export default function ProductDetailInfo({ product, onProductAdd }) {
    return (
        <>
            <p>
                {product.description} 每份以 <strong>${product.price}</strong> 售卖
            </p>
            <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
        </>
    )
}