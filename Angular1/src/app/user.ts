import { AppComponent } from './app.component';

export class User {
    credits: number;
    name: string;
    unlocks: string[];
    levelWins: boolean[];

    constructor(credits?: number, name?: string, unlocks?: string[], levelWins?: boolean[]) {
        this.credits = credits || 0;
        this.name = name || "new_user";
        this.unlocks = unlocks || 
        [
            "doggo",
            "froggo",
            "fishy",
            "blobbo",
            "ducko",
            "derpyberd"
        ]
        
        this.levelWins = levelWins || [];
        if (this.levelWins.length < 1)
            for (var i = 0; i < 8; i++)
                this.levelWins.push(false);
    }

    public win(id: number) {
        AppComponent.userServices.Win(this.name, id);
    }

    public static parseUser(data) {
        return new User(data.credits, data.username, data.unlocks, data.levelWins);
    }
}