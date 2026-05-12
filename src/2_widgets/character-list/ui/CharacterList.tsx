import { useGetCharactersQuery } from "@entities/character/model/CharacterApi";
import { PaginationController } from "@features/pagination";

import { selectCurrentCharacters } from "@features/pagination/model/selectors";

import CharacterCard from "@widgets/character-list/ui/CharacterCard";
import { useSelector } from "react-redux";

export const CharacterList = () => {
    const { isLoading, isError } = useGetCharactersQuery();
    const currentCharacters = useSelector(selectCurrentCharacters);

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
            <PaginationController />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {currentCharacters?.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};
