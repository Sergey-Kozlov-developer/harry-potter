import type { ICharacter } from "@entities/character/model/types";
import { Badge } from "@shared/ui/shadcn/badge";
import { Button } from "@shared/ui/shadcn/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shared/ui/shadcn/card";

interface ICharacterCardProps {
    character: ICharacter;
}
const CharacterCard = ({ character }: ICharacterCardProps) => {
    const image = character.image
        ? character.image
        : "https://avatar.vercel.sh/shadcn1";

    return (
        <Card className=" mx-auto w-full max-w-sm pt-0">
            <img src={image} alt="Event cover" className=" object-fill" />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">{character.house}</Badge>
                </CardAction>
                <CardTitle>{character.name}</CardTitle>
                <CardDescription>
                    {character.alternate_names?.join(", ")}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    );
};

export default CharacterCard;
