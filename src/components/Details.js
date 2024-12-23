import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { DetailsEdit } from "./DetailsEdit";

export function Details({ products, setProducts }) {
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    const productId = Number(params.id);
    const product = products.find((product) => product.id === productId);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="details-container">
            <button className="details-button" onClick={() => navigate("/")}>
                Back
            </button>
            <button
                className="details-button"
                onClick={() => setIsEditing(!isEditing)}
            >
                {isEditing ? "Cancel" : "Edit"}
            </button>

            {isEditing ? (
                <DetailsEdit
                    product={product}
                    products={products}
                    setProducts={setProducts}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <>
                    <h1 className="details-title">{product.title}</h1>
                    <div className="details-info">
                        {Object.entries(product).map(([key, value]) => (
                            <div key={key} className="details-item">
                                <strong className="details-key">{key}</strong>
                                <span className="details-value">{value}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
