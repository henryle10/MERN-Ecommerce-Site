import React, { useEffect, useState } from "react";

import axios from "axios";

const Product = (props) => {
    console.log(props);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product/" + props.id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.id]);

    if (product === null) {
        return "Loading..."
    }

    return (
        <div>
            <div key={product._id}>
                <h3>Product Name:{product.title}</h3>
                <h5>Price: ${product.price}</h5>
                <h3>Category: {product.category}</h3>
                <h3>Brand: {product.brand}</h3>
                <p>Description: {product.description}</p>
                <img src={product.imgUrl} alt="img" width="40%" />
            </div>
        </div>
    )
};

export default Product;