import { CharacterService } from '../../services/character.service';

export class CharacterInfo {
    health: number;
    damage: number;
    type: string;
    speed: number;
    team: string;
    name: string;
    description: string;

    constructor(team: string, name: string, private characterServices: CharacterService) {
        if (name == "unknown") {
            this.health = 0;
            this.damage = 0;
            this.type = "-";
            this.speed = 0;
            this.team = "-";
            this.name = "Loading...";
            this.description = "...";
        } else
            this.constructAsync(team, name);
    }

    constructAsync = async(team: string, name: string) => {
        var data = await <any>this.characterServices.getInfo(team, name);
        console.log(data);
        this.health = data.health;
        this.damage = data.damage;
        this.type = data.type;
        document.getElementById("damage-type").style.backgroundColor = this.type;
        this.speed = data.speed;
        this.team = team;
        this.name = name.charAt(0).toUpperCase() + name.substring(1);
        this.description = data.description;
    }
}