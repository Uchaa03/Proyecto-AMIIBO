import {useEffect, useState} from "react";

const PaginationHook = (items, numFigures) => {
    const [currentPage, setCurrentPage] = useState(1) // State for pages

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page when filters used
    }, [items]);

    // Calculate figures in the actual page
    const indexOfLastFigure = currentPage * numFigures
    const indexOfFirstItem = indexOfLastFigure - numFigures

    // Show 8 figures index of FirstItem
    const currentItems = items.slice(indexOfFirstItem, indexOfLastFigure) // Array of actual 8 amiibos

    // Calculate total pages
    const totalPages = Math.ceil(items.length / numFigures)

    // Change pages to next
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Change page to previous
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return {
        currentItems,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
    };
}
export default PaginationHook
