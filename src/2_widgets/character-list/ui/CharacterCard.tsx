import type { ICharacter } from "@entities/character/model/types";
import { Badge } from "@shared/ui/shadcn/badge";
import { Button } from "@shared/ui/shadcn/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shared/ui/shadcn/card";

import noImage from "@assets/image/no-image.png";

interface ICharacterCardProps {
    character: ICharacter;
}

const characteristics = [
    { id: 1, title: "Date of Birth", key: "dateOfBirth" },
    { id: 2, title: "Species", key: "species" },
    { id: 3, title: "Gender", key: "gender" },
    { id: 4, title: "Year of Birth", key: "yearOfBirth" },
    { id: 5, title: "Wizard", key: "wizard" },
    { id: 6, title: "Ancestry", key: "ancestry" },
    { id: 7, title: "Eye colour", key: "eyeColour" },
    { id: 8, title: "Hair colour", key: "hairColour" },
    { id: 9, title: "Patronus", key: "patronus" },
];

const CharacterCard = ({ character }: ICharacterCardProps) => {
    const formatValue = (value: unknown): string => {
        if (value === null || value === undefined || value === "") return "-";
        if (typeof value === "boolean") return value ? "Yes" : "No";
        return String(value);
    };
    const isHouse = character.house || "No house";
    const isAlternativeName =
        character.alternate_names?.join(", ") || "there is no alternative name";

    const image = character.image ? character.image : noImage;

    return (
        <Card className=" mx-auto w-full max-w-sm pt-0 ">
            <div className="items-center content-center mb-6 mt-6 mx-auto">
                <img
                    src={image}
                    alt="Event cover"
                    className="w-44 h-60 object-cover rounded-2xl"
                />
            </div>
            <CardHeader className="border-0">
                <CardAction>
                    <Badge variant="secondary">{isHouse}</Badge>
                </CardAction>
                <CardTitle>{character.name}</CardTitle>
                <CardDescription>{isAlternativeName}</CardDescription>
            </CardHeader>
            <CardContent>
                {characteristics.map((item) => {
                    const value = character[item.key as keyof ICharacter];
                    return (
                        <div
                            key={item.id}
                            className="flex justify-between mb-2"
                        >
                            <p>{item.title}</p>

                            <p>{formatValue(value)}</p>
                        </div>
                    );
                })}
            </CardContent>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    );
};

export default CharacterCard;
