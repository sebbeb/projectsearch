import React from "react";
import { Link } from "react-router";

export default function Product({ title, created, price, id }) {
    return (
        <Link to={id.toString()}>
            <div className="product-card">
                <h2 className="product-name">{title}</h2>
                <p className="product-created">
                    Created: {new Date(created).toLocaleDateString()}
                </p>
                <p className="product-price">{Number(price).toFixed(2)} DKK</p>
            </div>
        </Link>
    );
}
