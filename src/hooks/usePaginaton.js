import { useMemo, useState } from "react"

export const usePagination = (arr, pageSize) => {
    const [currentPage, setCurrentPage] = useState(1)
    
    const chunkedArray = useMemo(() => {
        return chunkArray(arr, pageSize)
    }, [arr, pageSize])

    const chunk = useMemo(() => {
        return chunkedArray[currentPage - 1]
    }, [chunkedArray, currentPage])

    return {
        chunk,
        currentPage,
        setCurrentPage,
        pagesAmount: chunkedArray.length
    }
}

function chunkArray(arr, size) {
    const result = []
    for(let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}