import { Spells } from "@widgets/spells";

export const SpellsPage = () => {
    return (
        <div className="flex flex-col items-center gap-7 mt-7">
            <h1 className="sm:text-2xl md:text-5xl">
                Characters from the Harry Potter universe
            </h1>
            <Spells />
        </div>
    );
};
