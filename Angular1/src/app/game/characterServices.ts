import { HttpClient } from '@angular/common/http';
import { production } from '../../main';

export class CharacterServices {
    private http: HttpClient;
    private URL: string;

    constructor(http: HttpClient) {
        this.http = http;

        if (production)
            this.URL = 'https://CastleDefenseGame-env-2.acznmbp2nz.us-east-1.elasticbeanstalk.com/';
        else
            this.URL = 'https://localhost:44364/'
    }

    public getCharacter(team: string, name: string): Promise<string> {
        return this.http.get<string>(this.URL + 'api/characters/getcharacter/' + team + '/' + name).toPromise();
    }

    public getPrice(team: string, name: string): Promise<number> {
        return this.http.get<number>(this.URL + 'api/characters/getprice/' + team + '/' + name).toPromise();
    }

    public getHTML(team: string, name: string): Promise<string> {
        return this.http.get(this.URL + 'api/characters/gethtml/' + team + '/' + name, {responseType: 'text'}).toPromise();
    }

    public getTeam(team: string): Promise<string[]> {
        return this.http.get<string[]>(this.URL + 'api/characters/getteam/' + team).toPromise();
    }

    public getInfo(team: string, name: string) {
        return this.http.get<number>(this.URL + 'api/characters/getinfo/' + team + '/' + name).toPromise();
    }
}