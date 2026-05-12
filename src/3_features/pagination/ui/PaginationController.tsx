import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationLink,
    PaginationNext,
    PaginationEllipsis,
} from "@shared/ui/shadcn/pagination";
import {
    goToPage,
    nextPage,
    prevPage,
} from "@features/pagination/model/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCurrentPage,
    selectTotalPages,
} from "@features/pagination/model/selectors";
import { usePaginationRange } from "@features/pagination/hook/usePaginationRange";

export const PaginationController = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);
    const paginationRange = usePaginationRange(currentPage, totalPages);
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => dispatch(prevPage())}
                        />
                    </PaginationItem>
                    {paginationRange.map((item, id) => (
                        <PaginationItem key={id}>
                            {item === "..." ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink
                                    onClick={() =>
                                        dispatch(goToPage(item as number))
                                    }
                                    isActive={currentPage === item}
                                >
                                    {item}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext onClick={() => dispatch(nextPage())} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
};
