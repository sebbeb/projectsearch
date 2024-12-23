import { useState } from "react";

export function Search({
    products,
    setFilteredProducts,
    setSearchPerformed,
    setCurrentPage,
}) {
    const [input, setInput] = useState("");
    const [timerID, setTimerID] = useState();

    const DEBOUNCE_TIME = 1000;

    function searchProducts(searchString) {
        const words = searchString.toLowerCase().split(/\s+/); // Split on whitespace

        const results = products.filter((product) => {
            const title = product.title.toLowerCase();

            return words.every((word) => title.includes(word));
        });

        setFilteredProducts(results);
        setSearchPerformed(true);
        setCurrentPage(1);
    }

    function onChange(e) {
        clearTimeout(timerID);
        const id = setTimeout(
            () => searchProducts(e.target.value),
            DEBOUNCE_TIME
        );

        setTimerID(id);
        setInput(e.target.value);
    }

    return (
        <div className="landing-page">
            <input
                type="text"
                value={input}
                onChange={onChange}
                placeholder="Search for a product..."
                className="search-input"
            />
        </div>
    );
}
