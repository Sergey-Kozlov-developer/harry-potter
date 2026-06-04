import { useGetSpellsQuery } from "@entities/character/model/CharacterApi";

export const Spells = () => {
    const { data: spellsList, isLoading, isError } = useGetSpellsQuery();

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
                {spellsList?.map((spell) => (
                    <div
                        key={spell.id}
                        className="border flex flex-col text-center p-4"
                    >
                        <span className="text-black font-bold">
                            {spell.name}
                        </span>
                        <span>{spell.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
