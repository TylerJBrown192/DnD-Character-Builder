// import { Alignment } from "../utils/Alignment";

export class BaseRace {
    name!: string;
    age!: number;
    // alignment!: Alignment; // I'm probably going to go with a method of "PlayerCharacter" that extends from BaseRace and BaseClass, so this probably doesn't belong to Race
    size!: string; // TODO: make possible race heights here;
    speed!: number; // TODO: make possible speed in feet here;

}