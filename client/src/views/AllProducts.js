import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";
import styles from '../styles/TechStyle.module.css';
import SideNavBar from '../components/SideNavBar';


const Products = (props) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/all/products")
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            });
    }, []);

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:8000/api/product/" + id)
            .then((res) => {
                const filteredProduct = products.filter((product) => {
                    return product._id !== id;
                });
                setProducts(filteredProduct);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (products === null) {
        return "Loading...";
    }


    return (
        <div className="text-left row">
            <SideNavBar></SideNavBar>
            <div className="col-md-6">
                <h2 className={styles.textTech}>View All Tech Products</h2>
                <div>
                    <h2>Featured Items</h2>
                    <div className="d-flex flex-wrap mt-4">
                        <div className="row" style={{ border: "1px solid black" }}>
                            {products.map((product) => {
                                return (
                                    <div className={`m-3 ${styles.techProductDiv}`} key={product._id}>

                                        <Link to={`/product/${product._id}`}><img className={`img-fluid ${styles.techImg}`} src={product.imgUrl} alt={product.title} /></Link>
                                        {/* <p className="font-weight-bold m-0">{product.title}</p>
                                    <p>Price: ${product.price}</p> */}
                                        {/* <button
                                        onClick={(event) => { handleDelete(product._id); }}
                                        className="btn btn-danger">
                                        Delete
                                    </button>{" "}
                                    <button
                                        onClick={(event) => { navigate(`/product/${product._id}/edit`) }}
                                        className="btn btn-warning">
                                        Edit
                                        </button> */
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Products;