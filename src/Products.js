import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const { get, loading } = useFetch("/react-supermarkert/data/");

    useEffect(() => {
        get("supermarkert.json")
            .then(data => setProducts(data))
            .catch(error => console.log("载入商品失败", error));
    }, []);

    return (
        <div className="products-layout">
            <h1>货架</h1>
            <p>来看看我们的商品</p>
            <div className="products-grid">
                {loading && <Loader />}
                {products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            details={product}
                            cart={props.cart}
                            onProductAdd={props.onProductAdd}
                            onProductDelete={props.onProductDelete}
                        />
                    );
                })}
            </div>
        </div>
    )
}