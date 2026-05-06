import { useGetCharactersQuery } from "@entities/character/model/CharacterApi";
import CharacterCard from "@widgets/character-list/ui/CharacterCard";

export const CharacterList = () => {
    const { data, isLoading, isError } = useGetCharactersQuery();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
            {data?.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};
