import { useGetCharactersQuery } from "@entities/character/model/CharacterApi";
import { PaginationController } from "@features/pagination";
import { setCurrentPage } from "@features/pagination/model/paginationSlice";

import {
    selectCurrentCharacters,
    selectFilteredCount,
} from "@features/pagination/model/selectors";
import {
    searchCharacters,
    selectHouse,
} from "@features/search/model/selectors";

import CharacterCard from "@widgets/character-list/ui/CharacterCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CharacterList = () => {
    const dispatch = useDispatch();
    const { isLoading, isError } = useGetCharactersQuery();
    const currentCharacters = useSelector(selectCurrentCharacters);
    const filteredCount = useSelector(selectFilteredCount);
    const search = useSelector(searchCharacters);
    const house = useSelector(selectHouse);

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, [search, house, dispatch]);

    if (isLoading) {
        return <div className="text-center text-2xl mt-5">Loading...</div>;
    }

    if (isError) {
        return (
            <div className="text-center text-2xl text-red-500 mt-5">
                Error loading
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:px-2.5 sm:px-2.5 lg:px-0">
                {currentCharacters?.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
            {filteredCount === 0 && (
                <div className="text-center text-2xl text-muted-foreground py-10">
                    No characters found
                </div>
            )}
            <div className="my-8">
                <PaginationController />
            </div>
        </div>
    );
};
