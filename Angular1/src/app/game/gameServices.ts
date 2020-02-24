import { HttpClient } from '@angular/common/http';
import { production } from '../../main';

export class GameServices {
    private http: HttpClient;
    private URL: string;

    constructor(http: HttpClient) {
        this.http = http;

        if (production)
            this.URL = 'https://CastleDefenseGame-env-2.acznmbp2nz.us-east-1.elasticbeanstalk.com/';
        else
            this.URL = 'https://localhost:44364/'
    }

    public getUnits(): Promise<string[]> {
        return this.http.get<string[]>(this.URL + 'api/game/getunits').toPromise();
    }
    public getPlayers(): Promise<string[]> {
        return this.http.get<string[]>(this.URL + 'api/game/getplayers').toPromise();
    }
    public init(team: string, id: number): Promise<boolean> {
        return this.http.get<boolean>(this.URL + 'api/game/init/' + team + '/' + id).toPromise();
    }
    public play(id: number): Promise<boolean> {
        return this.http.get<boolean>(this.URL + 'api/game/play/' + id).toPromise();
    }
    public end(id: number): Promise<boolean> {
        return this.http.get<boolean>(this.URL + 'api/game/end/' + id).toPromise();
    }
    public buy(id: number, player: number, unit: string): Promise<boolean> {
        return this.http.get<boolean>(this.URL + 'api/game/buy/' + id + '/' + player + '/' + unit).toPromise();
    }
}