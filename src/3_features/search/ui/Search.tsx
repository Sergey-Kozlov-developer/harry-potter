import { setSearch } from "@features/search/model/searchSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const Search = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setSearch(searchInput));
        }, 400);

        return () => clearTimeout(timeout);
    }, [searchInput, dispatch]);

    return (
        <>
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="border p-2.5 w-96"
            />
        </>
    );
};
