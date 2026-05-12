import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationLink,
    PaginationNext,
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

export const PaginationController = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => dispatch(prevPage())}
                        />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    onClick={() => dispatch(goToPage(page))}
                                    isActive={currentPage === page}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    )}
                    <PaginationItem>
                        <PaginationNext onClick={() => dispatch(nextPage())} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
};
