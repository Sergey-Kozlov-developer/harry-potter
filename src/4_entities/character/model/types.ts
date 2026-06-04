export interface ICharacter {
    id: string;
    name: string;
    alternate_names: string[] | null;
    image: string | null;
    species: string | null;
    gender: string | null;
    house: string | null;
    dateOfBirth: string | null;
    yearOfBirth: number | null;
    wizard: boolean | null;
    ancestry: string | null;
    eyeColour: string | null;
    hairColour: string | null;
    wand: {
        wood: string | null;
        core: string | null;
        length: number | null;
    };
    patronus: string | null;
    hogwartsStudent: boolean | null;
}

export interface ISpell {
    id: string;
    name: string;
    description: string;
}

export type TCharacterResponse = ICharacter[];
export type TCharacterByHouseResponse = ICharacter[];
export type TStaffResponse = ICharacter[];
export type TSpellResponse = ISpell[];
