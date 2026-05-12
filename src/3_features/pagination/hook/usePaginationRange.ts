import { useMemo } from "react";

const ELLIPSIS = "...";
const SIBLING_COUNT = 1;
const TOTAL_VISIBLE_ITEMS = 6;

export const usePaginationRange = (currentPage: number, totalPages: number) => {
    return useMemo(() => {
        if (totalPages < TOTAL_VISIBLE_ITEMS) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const leftSibling = Math.max(2, currentPage - SIBLING_COUNT);
        const rightSibling = Math.min(
            totalPages - 1,
            currentPage + SIBLING_COUNT
        );

        const leftShowElipsis = leftSibling > 2;
        const rightShowElipsis = rightSibling < totalPages - 1;

        const range: (number | string)[] = [1];

        if (leftShowElipsis) range.push(ELLIPSIS);
        for (let i = leftSibling; i <= rightSibling; i++) range.push(i);
        if (rightShowElipsis) range.push(ELLIPSIS);

        range.push(totalPages);

        return range;
    }, [currentPage, totalPages]);
};
