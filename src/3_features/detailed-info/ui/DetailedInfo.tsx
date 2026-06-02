import type { ICharacter } from "@entities/character/model/types";
import { Button } from "@shared/ui/shadcn/button";
import {
    Dialog,
    DialogTitle,
    DialogHeader,
    DialogContent,
    DialogTrigger,
    DialogDescription,
} from "@shared/ui/shadcn/dialog";

const DETAILED_INFO_CHARACTER = [
    { id: 1, title: "Date of Birth", key: "dateOfBirth" },
    { id: 2, title: "Species", key: "species" },
    { id: 3, title: "Gender", key: "gender" },
    { id: 4, title: "Year of Birth", key: "yearOfBirth" },
    { id: 5, title: "Wizard", key: "wizard" },
    { id: 6, title: "Ancestry", key: "ancestry" },
    { id: 7, title: "Patronus", key: "patronus" },
    { id: 8, title: "Hair colour", key: "hairColour" },
    { id: 9, title: "Eye colour", key: "eyeColour" },
];

export const DetailedInfo = ({ character }: { character: ICharacter }) => {
    const detailedInfoCharacter = DETAILED_INFO_CHARACTER.map((item) => {
        const formatValue = (value: unknown): string => {
            if (value === null || value === undefined || value === "")
                return "-";
            if (typeof value === "boolean") return value ? "Yes" : "No";
            return String(value);
        };
        return {
            id: item.id,
            title: item.title,
            value: formatValue(character[item.key as keyof ICharacter]),
        };
    });
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full">Detailed info</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Detailed info character:
                        <span className="font-bold"> {character.name}</span>
                    </DialogTitle>
                </DialogHeader>

                {detailedInfoCharacter.map((item) => (
                    <DialogDescription
                        key={item.id}
                        className="flex justify-between"
                    >
                        <span className="font-bold">{item.title}</span>
                        <span className="font-normal text-right">
                            {item.value}
                        </span>
                    </DialogDescription>
                ))}
            </DialogContent>
        </Dialog>
    );
};
