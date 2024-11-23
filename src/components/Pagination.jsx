import { useSearchParams } from "react-router-dom";
import "../css/pagination.css";
import { useEffect } from "react";


export function Pagination({ pagesAmount, page, changePage }) {

    const [params, setSearchParams] = useSearchParams();
    const pageNumber = params.get("page");
    useEffect(() => {
        if (pageNumber) {
            changePage(Number(pageNumber));
        }
    }, []);

    useEffect(() => {
        console.log(page);
        setSearchParams({page});
    }, [page]);

    return (
        <div className="pagination">
            <button
                disabled={Number(page) === 1}
                className="prev-pagination-btn"
                value={Number(page) - 1}
                onClick={() => changePage(page - 1)}
            >
                ‹
            </button>
            {Array(pagesAmount)
                .fill(0)
                .map((item, index) => (
                    <button
                        onClick={() => changePage(index + 1)}
                        className="pagination-btn"
                        disabled={index + 1 === Number(page)}
                        key={index}
                    >
                        {index + 1}
                    </button>
                ))}
            <button
                disabled={Number(page) === pagesAmount}
                className="next-pagination-btn"
                value={Number(page) + 1}
                onClick={() => changePage(page + 1)}
            >
                ›
            </button>
        </div>
    );
}
