import { useState } from "react";
import { ProductListing } from "./ProductListing";
import "./globals.css";
import { Search } from "./Search";

export function Home({ products }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className={searchPerformed ? "search-performed" : ""}>
            <Search
                products={products}
                setFilteredProducts={setFilteredProducts}
                setSearchPerformed={setSearchPerformed}
                setCurrentPage={setCurrentPage}
            />
            {searchPerformed && (
                <ProductListing
                    products={filteredProducts}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
}
