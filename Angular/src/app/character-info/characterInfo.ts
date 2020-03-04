import { CharacterService } from '../../services/character.service';

export class CharacterInfo {
    health: number;
    damage: number;
    speed: number;
    team: string;
    name: string;
    description: string;

    constructor(team: string, name: string, private characterServices: CharacterService) {
        if (name == "unknown") {
            this.health = 0;
            this.damage = 0;
            this.speed = 0;
            this.team = "-";
            this.name = "Loading...";
            this.description = "...";
        } else
            this.constructAsync(team, name);
    }

    constructAsync = async(team: string, name: string) => {
        var data = await <any>this.characterServices.getInfo(team, name);
        this.health = data.health;
        this.damage = data.damage;
        this.speed = data.speed;
        this.team = team;
        this.name = name;
        this.description = data.description;
    }
}