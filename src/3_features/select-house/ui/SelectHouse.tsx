import {
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@shared/ui/shadcn/select";
import { useSelector } from "react-redux";
import { selectHouse } from "@features/search/model/selectors";
import { useDispatch } from "react-redux";
import { setHouse } from "@features/search/model/searchSlice";
import { useCallback } from "react";

const HOUSES = [
    { id: 1, value: "gryffindor", label: "Gryffindor" },
    { id: 2, value: "slytherin", label: "Slytherin" },
    { id: 3, value: "hufflepuff", label: "Hufflepuff" },
    { id: 4, value: "ravenclaw", label: "Ravenclaw" },
];

export const SelectHouse = () => {
    const dispatch = useDispatch();
    const house = useSelector(selectHouse);

    const handleHouseChange = useCallback(
        (value: string) => {
            dispatch(setHouse(value));
        },
        [dispatch]
    );

    return (
        <Select value={house} onValueChange={handleHouseChange}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a house" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Houses</SelectLabel>
                    {HOUSES.map((house) => (
                        <SelectItem key={house.id} value={house.value}>
                            {house.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
