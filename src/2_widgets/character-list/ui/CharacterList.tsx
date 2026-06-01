import { useGetCharactersQuery } from "@entities/character/model/CharacterApi";
import { PaginationController } from "@features/pagination";

import { selectCurrentCharacters } from "@features/pagination/model/selectors";
import { searchCharacters } from "@features/search/model/selectors";

import CharacterCard from "@widgets/character-list/ui/CharacterCard";
import { useSelector } from "react-redux";

export const CharacterList = () => {
    const { isLoading, isError } = useGetCharactersQuery();
    const currentCharacters = useSelector(selectCurrentCharacters);
    const search = useSelector(searchCharacters);

    const handleSearch = currentCharacters.filter((item) => {
        const searchItem = item.name
            .toLowerCase()
            .includes(search.toLowerCase());
        return searchItem;
    });

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
                {handleSearch?.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
            <div className="my-8">
                <PaginationController />
            </div>
        </div>
    );
};
