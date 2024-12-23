import { useState } from "react";

export function DetailsEdit({ product, products, setProducts, setIsEditing }) {
    const [editedProduct, setEditedProduct] = useState({ ...product });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSave = () => {
        const updatedProducts = products.map((currentProduct) =>
            currentProduct.id === product.id ? editedProduct : currentProduct
        );
        setProducts(updatedProducts);
        setIsEditing(false);
    };

    return (
        <div className="edit-form">
            {Object.entries(editedProduct).map(([key, value]) => (
                <div key={key} className="edit-item">
                    <label htmlFor={key} className="edit-label">
                        {key}
                    </label>
                    <input
                        type="text"
                        id={key}
                        name={key}
                        value={value || ""}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                </div>
            ))}
            <button className="details-button" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}
