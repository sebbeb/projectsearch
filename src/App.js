import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Details } from "./Details";
import { Home } from "./Home";

export function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/servicepos/projectsearch/0f840c4a3793eca4f0c22141238f02373bbe49ea/products.json"
                );
                if (!response.ok) setProducts([]);

                const data = await response.json();

                setProducts(data.content);
            } catch (err) {
                console.log(err.message);
            }
        }

        fetchProducts();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
                path="/:id"
                element={
                    <Details products={products} setProducts={setProducts} />
                }
            />
        </Routes>
    );
}
