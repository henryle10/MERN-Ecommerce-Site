import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product/" + props.id)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setImgUrl(res.data.imgUrl);
                setBrand(res.data.brand);
                setCategory(res.data.category);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.id]);

    const handleSubmit = (event) => {
        console.log("hello from edit product.js")
        event.preventDefault();

        const editedProduct = {
            title,
            price,
            imgUrl,
            brand,
            category,
            description,
        };

        axios
            .put("http://localhost:8000/api/products/" + props.id, editedProduct)
            .then((res) => {
                console.log(res);
                navigate("/product/" + res.data._id)
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    };

    return (
        <div className="container">
            <form onSubmit={(event) => { handleSubmit(event); }} >
                <div className="row">
                    <div className="col-md-4">
                        <label>Title: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                        {errors.title ? (<span style={{ color: "red" }}>{errors.title.message}</span>) : ("")}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <label>Price: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="number"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                        />
                        {errors.price ? (<span style={{ color: "red" }}>{errors.price.message}</span>) : ("")}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <label>Category: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="text"
                            value={category}
                            onChange={(event) => {
                                setCategory(event.target.value);
                            }}
                        />
                        {errors.category ? (<span style={{ color: "red" }}>{errors.category.message}</span>) : ("")}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <label>Brand: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="text"
                            value={brand}
                            onChange={(event) => {
                                setBrand(event.target.value);
                            }}
                        />
                        {errors.brand ? (<span style={{ color: "red" }}>{errors.brand.message}</span>) : ("")}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <label>Image: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="text"
                            value={imgUrl}
                            onChange={(event) => {
                                setImgUrl(event.target.value);
                            }}
                        />
                        {errors.imgUrl ? (<span style={{ color: "red" }}>{errors.imgUrl.message}</span>) : ("")}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <label>Description: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="text"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                        {errors.description ? (<span style={{ color: "red" }}>{errors.description.message}</span>) : ("")}
                    </div>
                </div>
                <button>Update</button>
            </form >
        </div>
    )
};
export default EditProduct;