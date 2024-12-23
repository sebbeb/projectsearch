import { ITEMS_PER_PAGE } from "./ProductListing";

export function PageButtons({ products, currentPage, setCurrentPage }) {
    return (
        <div className="pagination">
            <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Prev
            </button>
            Page {currentPage}
            <button
                disabled={currentPage >= products.length / ITEMS_PER_PAGE}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}
