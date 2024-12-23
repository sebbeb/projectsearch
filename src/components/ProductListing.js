import React from "react";
import Product from "./Product";
import { PageButtons } from "./PageButtons";

export const ITEMS_PER_PAGE = 15;

export function ProductListing({ products, currentPage, setCurrentPage }) {
    return (
        <div className="results">
            {products.length === 0 ? (
                <div className="no-results">
                    <h2>No Results Found</h2>
                    <p>
                        Try adjusting your search to find what you're looking
                        for.
                    </p>
                </div>
            ) : (
                <>
                    <div className="product-grid">
                        {products
                            .slice(
                                ITEMS_PER_PAGE * (currentPage - 1),
                                ITEMS_PER_PAGE * currentPage
                            )
                            .map((product) => (
                                <Product
                                    key={product.id}
                                    title={product.title}
                                    created={product.created}
                                    price={product.price}
                                    id={product.id}
                                />
                            ))}
                    </div>

                    <PageButtons
                        products={products}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
}
